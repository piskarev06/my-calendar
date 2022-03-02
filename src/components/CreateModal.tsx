import React, { FC, useState, useEffect } from 'react'
import { useParams } from 'react-router'

import { useActions } from '../hooks/useActions'
import { Modal } from './Modal'

interface ModalProps {
  active: boolean
  setActive: any
}
export const CreateModal: FC<ModalProps> = ({ active, setActive }) => {
  const { data } = useParams()

  const { addTodo } = useActions()

  const [title, setTitle] = useState('')
  const [type, setType] = useState('board')
  const [dataInput, setData] = useState([{ id: 1, inputValue: '' }])
  const [date, setDate] = useState(data)

  const submitHander = (e: any) => {
    e.preventDefault()

    //@ts-ignore
    addTodo(date, type, title, dataInput)

    setTitle('')
    setType('board')
    setData([{ id: 1, inputValue: '' }])
    setActive(false)
  }

  const typeHandler = (e: any) => {
    setType(e.target.value)
  }

  const titleHandler = (e: any) => {
    setTitle(e.target.value)
  }

  const dataHandler = (value: string, id: number) => {
    setData(
      dataInput.map((el) => {
        if (el.id === id) {
          let newObj = { id: el.id, inputValue: value }
          return newObj
        } else return el
      }),
    )
  }

  const dataCountHandler = () => {
    let lastEl = dataInput.length - 1
    let newId = dataInput[lastEl].id + 1

    setData([...dataInput, { id: newId, inputValue: '' }])
  }

  useEffect(() => {
    console.log(dataInput)
  }, [dataInput])

  return (
    <Modal active={active} setActive={setActive}>
      <div className="create">
        <div className="create__inner">
          <h3 className="create__title">Создание новой записи</h3>
          <form className="create__form" onSubmit={(e) => submitHander(e)}>
            <label className="form__label">
              Название:
              <input
                className="form__input"
                type="text"
                value={title}
                name="title"
                onChange={(e) => titleHandler(e)}
              />
            </label>

            <div className="select__wrapper">
              <label className="form__label">Выберите тип записи:</label>
              <select className="form__select" value={type} onChange={(e) => typeHandler(e)}>
                <option value="board">Board</option>
                <option value="todo">Todo</option>
              </select>
            </div>

            {dataInput.map((el, i) => {
              return (
                <>
                  <label className="form__label">
                    Запись:
                    <input
                      className="form__input"
                      type="text"
                      value={dataInput[i].inputValue}
                      name={`${i}data`}
                      onChange={(e) => dataHandler(e.target.value, el.id)}
                    />
                  </label>
                </>
              )
            })}

            <span className="form__clicker" onClick={() => dataCountHandler()}>
              {' '}
              +{' '}
            </span>

            <button className="form__button" type="submit">
              Отправить
            </button>
          </form>
        </div>
      </div>
    </Modal>
  )
}
