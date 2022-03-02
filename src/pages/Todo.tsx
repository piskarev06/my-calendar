import React, { useState, useEffect, FC } from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components'

import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'
import { TodoList } from '../components/TodoList'
import { Sidebar } from '../components/ui/Sidebar'
import { Preloader } from '../components/ui/Preloader'

import { Container } from '../share/styles'
import { CreateModal } from '../components/CreateModal'

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
  const { todos, error, loading } = useTypedSelector((state) => state.todo)

  const { fetchTodos } = useActions()
  const [isBoard, setIsBoard] = useState(false)
  const [modalActive, setModalActive] = useState(false)

  const { data } = useParams()

  useEffect(() => {
    //@ts-ignore
    fetchTodos(+data, isBoard)
  }, [isBoard])

  console.log(todos)
  useEffect(() => {
    console.log(todos)
  }, [todos])

  if (loading) {
    return <Preloader />
  }
  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <>
      <div className="todo">
        <Container>
          <TodoInner>
            <Sidebar setIsBoard={setIsBoard}></Sidebar>

            <div className="todo__content">
              {todos.length ? (
                <Todos>
                  <TodoList data={data} isBoard={isBoard} />
                </Todos>
              ) : (
                <h4 className="content__nothing">На этот день нет планов</h4>
              )}

              <div className="content__bottom">
                <button className="content__modal" onClick={() => setModalActive(true)}>
                  Создать запись
                </button>
              </div>
            </div>
          </TodoInner>
        </Container>
      </div>
      <CreateModal active={modalActive} setActive={setModalActive} />
    </>
  )
}
