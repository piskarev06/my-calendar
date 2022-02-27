import React, { FC } from 'react'
import { TodoType } from '../types/todo'

interface TodoItemProps extends TodoType {}
export const TodoItem: FC<TodoItemProps> = ({ data, date, title, type, id }) => {
  return (
    <>
      {/* <li className="todos__item">
        <h4 className="todos__title">{title}</h4>
        <ul className="todos__list">
          {data.map((el, i) => (
            <li className="list__item" key={el[i]}>
              {el}
            </li>
          ))}
        </ul>
      </li> */}

      <li className="faq__item">
        <label className="item__title" htmlFor={String(id)}>
          {title}
        </label>
        <input className="item__input" type="checkbox" id={String(id)} />
        <ul className="item__text">
          {data.map((el, i) => (
            <li key={i+el+i} className="list__item">
              <input className="list__input" type="checkbox" id={el + i} />
              <label className="list__title" htmlFor={el + i}>
                {el}
              </label>
              <button>DELETE</button>
            </li>
          ))}
        </ul>
      </li>
    </>
  )
}
