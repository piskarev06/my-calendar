import React, { useState, useEffect, FC } from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components'

import { getTodosByTime } from '../api'
import { TodoList } from '../components/TodoList'
import { Sidebar } from '../components/ui/Sidebar'
import { Preloader } from '../components/ui/Preloader'

import { TodoType } from '../types'

import { Container } from '../share/styles'

const TodoInner = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

const Todos = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0;
  list-style: none;

  max-height: 450px;
  overflow-y: auto;
`

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
    <div className="todo">
      <Container>
        <TodoInner>
          <Sidebar setIsBoard={setIsBoard}></Sidebar>

          <div className="todo__content">
            {!loading ? (
              todos.length ? (
                <Todos>
                  <TodoList todos={todos} />
                </Todos>
              ) : (
                <h4 className="content__nothing">На этот день нет планов</h4>
              )
            ) : (
              <Preloader />
            )}

            <div className="content__bottom">
              <button className="content__modal">Создать запись</button>
            </div>
          </div>
        </TodoInner>
      </Container>
    </div>
  )
}
