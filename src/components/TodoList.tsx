import React, { useState, useEffect, FC } from 'react'

import { getAllTodos } from '../api'
import {TodoType} from '../types'
import { TodoItem } from './TodoItem'

interface TodoListProps {
    todos: TodoType[]
}
//@ts-ignore
export const TodoList: FC<TodoListProps> = ({todos}) => {
  
  return (
    {
        todos.map((el: any) => {
            <TodoItem {...el}/>
        })
    }
  )
}


// {todos.length ? (
//     todos.map((el) => {
//       return (
//         <>
//           <h4>{el.title}</h4>
//           <ul>
//             {el.data.map((note) => {
//               return <li>{note}</li>
//             })}
//           </ul>
//           {el.type ? <b>Доска</b> : <b>Туду</b>}
//         </>
//       )
//     })
//   ) : (
//     <div>Loading...</div>
//   )}