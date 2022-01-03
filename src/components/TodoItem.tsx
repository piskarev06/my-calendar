import React, { FC } from 'react'
import { TodoType } from '../types'

interface TodoItemProps extends TodoType {}
export const TodoItem: FC<TodoItemProps> = ({ data, date, title, type }) => {
  return (
    <li className="todo-item">
      <h4>{title}</h4>
      <ul>
        {data.map((el, i) => (
          <li key={el[i]}>{el}</li>
        ))}
      </ul>
    </li>
  )
}
