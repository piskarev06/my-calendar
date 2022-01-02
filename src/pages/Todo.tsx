import React, { useState, useEffect, FC } from 'react'

import { getAllTodos, getBoards, getTodos } from '../api'
import { TodoList } from '../components/TodoList'
import { Sidebar } from '../components/ui/Sidebar'

import { TodoType } from '../types'

export const Todo: FC = () => {
  const [todos, setTodos] = useState<TodoType[]>([])

  useEffect(() => {
    getAllTodos().then((res) => {
      const data = res.data
      setTodos(data)
    })
  }, [])
  return (
    <div className="wrapper">
      <Sidebar></Sidebar>

      <div className="todos">
        <TodoList todos={todos} />
      </div>
    </div>
  )
}
