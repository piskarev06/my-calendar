import React, { useState, useEffect, FC } from 'react'
import { getAllTodos } from '../api'

interface TodoType {
  date: number
  type: boolean
  title: string
  data: string[]
}

export const Todo: FC = () => {
  const [todos, setTodos] = useState<TodoType[]>([])

  useEffect(() => {
    getAllTodos().then((res) => {
      const data = res.data
      setTodos(data)
    })
  }, [])

  console.log(todos)
  return (
    <div className="todos">
      {todos.map((el) => {
        // prettier-ignore
        <>
          <h4>{el.title}</h4>
          <ul>
            
            {el.data.map((note) => {
              // prettier-ignore
              <li>{note}</li>
            })}
          </ul>
          {el.type ? <b>Доска</b> : <b>Туду</b>}
        </>
      })}
    </div>
  )
}
