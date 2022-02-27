import React, { useState, useEffect, FC } from 'react'

import { TodoType } from '../types/todo'
import { TodoItem } from './TodoItem'


interface TodoListProps {
  todos: TodoType[]
  counter: number
  setCounter: any
}

export const TodoList: FC<TodoListProps> = ({ todos, counter, setCounter }) => {
  // useEffect(() => {
    
  //   return (
  //     setCounter(0)
  //   )
  // }, [counter])

  return (
    <>
      {todos.map((el) => (
        <TodoItem key={el.id} {...el} />
      ))}
    </>
  )
}
