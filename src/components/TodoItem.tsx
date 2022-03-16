import React, { FC, useState, useEffect } from 'react'
import { resourceLimits } from 'worker_threads'
import { changeData } from '../api'
import { dataCompleteChange } from '../store/action-creators/todo'
import { TodoType } from '../types/todo'

interface TodoItemProps extends TodoType {}

export const TodoItem: FC<TodoItemProps> = ({ data, date, title, type, id }) => {
  const [newData, setNewData] = useState([...data])

  const isCompleteHandler = (id: number, todoId: number) => {
    let result = newData.map((el) => {
      if (el.id === id) return { ...el, isComplete: !el.isComplete }
      else return el
    })

    setNewData(result)

    let todo = {
      id: todoId,
      date,
      type,
      title,
      data,
    }

    console.log(todo, newData)

    dataCompleteChange(todo, newData)
  }

  return (
    <li className="faq__item">
      <label className="item__title" htmlFor={String(id)}>
        {title}
      </label>
      <input className="item__input" type="checkbox" id={String(id)} />
      <ul className="item__text">
        {data.map((el, i) => (
          <li key={i + el.id + i} className="list__item">
            <input
              className="list__input"
              //@ts-ignore
              checked={el.isComplete}
              type="checkbox"
              id={el.id + i}
              onClick={() => isCompleteHandler(el.id, id)}
            />
            <label className="list__title" htmlFor={el.id + i}>
              {el.inputValue}
            </label>
            <button>DELETE</button>
          </li>
        ))}
      </ul>
    </li>
  )
}
