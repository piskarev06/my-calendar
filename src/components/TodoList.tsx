import React, { useState, useEffect, FC } from 'react'

import { useTypedSelector } from '../hooks/useTypedSelector'
import { TodoItem } from './TodoItem'

interface TodoListProps {
  data: any
  isBoard: boolean
}

export const TodoList: FC<TodoListProps> = () => {
  const { page, error, loading, todos, limit } = useTypedSelector((state) => state.todo)

  useEffect(() => {
    console.log(todos)
  }, [todos])

  return (
    <>
      {todos.map((el) => (
        <TodoItem key={el.id} {...el} />
      ))}
    </>
  )
}
