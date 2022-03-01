import React, { useState, useEffect, FC } from 'react'

import { useTypedSelector } from '../hooks/useTypedSelector'
import { TodoItem } from './TodoItem'
import { TodoType } from '../types/todo'

interface TodoListProps {
  data: any
  isBoard: boolean
}

export const TodoList: FC<TodoListProps> = () => {
  const { page, error, loading, todos, limit } = useTypedSelector((state) => state.todo)

  useEffect(() => {
    console.log(page, error, loading, todos, limit)
  }, [todos])

  return (
    <>
      {todos.map((el) => (
        <TodoItem key={el.id} {...el} />
      ))}
    </>
  )
}
