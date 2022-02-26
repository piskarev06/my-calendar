import React, { FC, useState } from 'react'
import moment from 'moment'
import axios from 'axios'

import { Modal } from './Modal'
import { createTodo } from '../api'
import { JsxElement } from 'typescript'

interface ModalProps {
  active: boolean
  setActive: any
}
export const CreateModal: FC<ModalProps> = ({ active, setActive }) => {
  const [title, setTitle] = useState('')
  const [type, setType] = useState('board')
  const [data, setData] = useState('')
  const [date, setDate] = useState(moment().unix())
  const [countData, setCountData] = useState(1)

  const submitHander = (e: any) => {
    e.preventDefault()
    setDate(moment().unix())

    createTodo(date, type, title, data)

    setTitle('')
    setType('board')
    setData('')
    setDate(moment().unix())
    setActive(false)
  }

  const typeHandler = (e: any) => {
    setType(e.target.value)
  }

  const titleHandler = (e: any) => {
    setTitle(e.target.value)
  }

  const dataHandler = (e: any) => {
    setData(e.target.value)
  }

  //   const For = (): JsxElement => {
  //     for (let i = 1; i <= countData; i++) {
  //       return (
  //         <label>
  //           Запись:
  //           <input type="text" value={data} name={`data${i}`} onChange={(e) => dataHandler(e)} />
  //         </label>
  //       )
  //     }
  //   }

  return (
    <Modal active={active} setActive={setActive}>
      <div className="create">
        <h3 className="create__title">Создание новой записи</h3>
        <form className="create__form" onSubmit={(e) => submitHander(e)}>
          <label>
            Название:
            <input type="text" value={title} name="title" onChange={(e) => titleHandler(e)} />
          </label>

          <label>Выберите тип записи:</label>
          <select value={type} onChange={(e) => typeHandler(e)}>
            <option value="board">Board</option>
            <option value="todo">Todo</option>
          </select>

          <label>
            Запись:
            <input type="text" value={data} name="data" onChange={(e) => dataHandler(e)} />
          </label>

          <button type="submit">Отправить</button>
        </form>
      </div>
    </Modal>
  )
}
