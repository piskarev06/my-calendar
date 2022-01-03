import React, { useState, useEffect, FC } from 'react'
import { useParams } from 'react-router'

import { getTodosByTime } from '../api'
import { TodoList } from '../components/TodoList'
import { Sidebar } from '../components/ui/Sidebar'
import { Preloader } from '../components/ui/Preloader'

import { TodoType } from '../types'

export const Todo: FC = () => {
  const [todos, setTodos] = useState<TodoType[]>([])
  const [isBoard, setIsBoard] = useState(false)
  const [loading, setLoading] = useState(true)

  const { data } = useParams()

  useEffect(() => {
    //@ts-ignore
    getTodosByTime(+data, isBoard).then((res) => {
      const data = res.data
      setTodos(data)
      setLoading(false)
    })
    console.log(todos)
  }, [isBoard])

  return (
    <div className="wrapper">
      <Sidebar setIsBoard={setIsBoard}></Sidebar>

      {!loading ? (
        todos.length ? (
          <div className="todos">
            <TodoList todos={todos} />
          </div>
        ) : (
          <h4>На этот день нет планов</h4>
        )
      ) : (
        <Preloader />
      )}
    </div>
  )
}
