import React, { useState, useEffect, FC } from 'react'

import { getBoards, getCurrentTodos, getTodos } from '../api'
import { TodoList } from '../components/TodoList'
import { Sidebar } from '../components/ui/Sidebar'
import { Preloader } from '../components/ui/Preloader'

import { TodoType } from '../types'

export const Todo: FC = () => {
  const [todos, setTodos] = useState<TodoType[]>([])
  const [isBoard, setIsBoard] = useState(false)

  useEffect(() => {
    getCurrentTodos(isBoard).then((res) => {
      const data = res.data
      setTodos(data)
      console.log(todos, isBoard)
    })
  }, [isBoard])
  console.log(todos, isBoard)
  return (
    <div className="wrapper">
      <Sidebar setIsBoard={setIsBoard} ></Sidebar>

      {todos.length ? (
        <div className="todos">
          <TodoList todos={todos} />
        </div>
      ) : (
        <Preloader />
      )}
    </div>
  )
}
