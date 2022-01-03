import React, { useState, FC } from 'react'

import { TodoType } from '../types'
import { TodoItem } from './TodoItem'

interface TodoListProps {
  todos: TodoType[]
}

export const TodoList: FC<TodoListProps> = ({ todos }) => {
  return (
    <>
      {todos.map((el) => (
        <TodoItem key={el.id} {...el} />
      ))}
    </>
  )
}
