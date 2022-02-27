import React, { useState, useEffect, FC } from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components'

import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import { getTodosByTime } from '../api'
import { TodoList } from '../components/TodoList'
import { Modal } from '../components/Modal'
import { Sidebar } from '../components/ui/Sidebar'
import { Preloader } from '../components/ui/Preloader'

import { TodoType } from '../types/todo'

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
  const {page, error, loading, todos, limit} = useTypedSelector(state => state.todo)
  
  const {fetchTodos, setTodoPage} = useActions()
  const [counter, setCounter] = useState(0)
  const [isBoard, setIsBoard] = useState(false)
  const [modalActive, setModalActive] = useState(false)

  const { data } = useParams()

  useEffect(() => {
    //@ts-ignore
    fetchTodos(+data, isBoard)
    console.log(todos)
    console.log(counter)

    return (
      setCounter(0)
    )
  }, [isBoard, counter])

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
              {
                todos.length ? (
                  <Todos>
                    <TodoList setCounter counter={counter} todos={todos} />
                  </Todos>
                ) : (
                  <h4 className="content__nothing">На этот день нет планов</h4>
                )
              }

              <div className="content__bottom">
                <button className="content__modal" onClick={() => setModalActive(true)}>
                  Создать запись
                </button>
              </div>
            </div>
          </TodoInner>
        </Container>
      </div>
      <CreateModal setCounter={setCounter} active={modalActive} setActive={setModalActive} />
    </>
  )
}
