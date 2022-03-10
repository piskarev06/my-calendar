import React, { FC, useState } from 'react'
import { TodoType } from '../types/todo'

interface TodoItemProps extends TodoType {}

export const TodoItem: FC<TodoItemProps> = ({ data, date, title, type, id, isComplete }) => {
  const [copyData, setCopyData] = useState([...data])

  const isCompleteHandler = (id: number) => {
    let newArr = [...copyData]

    // newArr.map((el) => {
    //   if (el.id === id) return { id: id, inputValue: el.inputValue, isComplete: !el.isComplete }
    //   else return el
    // })

    // setCopyData(newArr)
    // console.log(copyData)

    setCopyData(
      newArr.map((el) => {
        if (el.id === id) {
          let newObj = { id: el.id, inputValue: el.inputValue, isComplete: !el.isComplete }
          return newObj
        } else return el
      }),
    )

    console.log(copyData)
  }

  return (
    <li className="faq__item">
      <label className="item__title" htmlFor={String(id)}>
        {title}
      </label>
      <input className="item__input" type="checkbox" id={String(id)} />
      <ul className="item__text">
        {data.map((el, i) => (
          <li key={i + el + i} className="list__item">
            <input
              className="list__input"
              //@ts-ignore
              value={isComplete}
              type="checkbox"
              id={el + i}
              onClick={() => isCompleteHandler(el.id)}
            />
            <label className="list__title" htmlFor={el + i}>
              {el.inputValue}
            </label>
            <button>DELETE</button>
          </li>
        ))}
      </ul>
    </li>
  )
}
