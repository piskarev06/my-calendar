import { Dispatch } from 'redux'
import { v4 as uuid } from 'uuid'

import { TodoAction, TodoActionTypes, TodoType } from '../../types/todo'
import { getTodosByTime, createTodo, changeData } from '../../api'

export const fetchTodos = (startDayTime: number, isBoard: boolean, page = 1, limit = 4) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionTypes.FETCH_TODOS })

      getTodosByTime(startDayTime, isBoard)
        .then((response) => {
          dispatch({ type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: response.data })
        })
        .catch((e) => {
          dispatch({
            type: TodoActionTypes.ACTION_TODOS_ERROR,
            payload: 'Произошла ошибка при загрузке списка дел',
          })
        })
    } catch (e) {
      dispatch({
        type: TodoActionTypes.ACTION_TODOS_ERROR,
        payload: 'Произошла ошибка при загрузке списка дел',
      })
    }
  }
}

export const addTodo = (date: number, type: any, title: string, data: any[]) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionTypes.ADD_TODO })

      if (type == 'todo') type = false
      else type = true
      let id = uuid()

      createTodo(id, date, type, title, data)
        .then((response) => {
          //@ts-ignore
          dispatch({ type: TodoActionTypes.ADD_TODO_SUCCESS, payload: [response] })
        })
        .catch((e) => {
          dispatch({
            type: TodoActionTypes.ACTION_TODOS_ERROR,
            payload: 'Произошла ошибка при добавлении новой записи',
          })
          console.log(e)
        })
    } catch (e) {
      dispatch({
        type: TodoActionTypes.ACTION_TODOS_ERROR,
        payload: 'Произошла ошибка при добавлении новой записи',
      })
    }
  }
}

export const dataCompleteChange = (todo: TodoType, newData: any[]) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionTypes.DATA_COMPLETE_CHANGE })

      changeData(todo, newData)
        .then((response) => {
          //@ts-ignore
          dispatch({
            type: TodoActionTypes.DATA_COMPLETE_CHANGE_SUCCESS,
            payload: [response.newData],
          })
        })
        .catch((e) => {
          dispatch({
            type: TodoActionTypes.ACTION_TODOS_ERROR,
            payload: 'Произошла ошибка при выполнении задачи',
          })
          console.log(e)
        })
    } catch (e) {
      dispatch({
        type: TodoActionTypes.ACTION_TODOS_ERROR,
        payload: 'Произошла ошибка при выполнении задачи',
      })
    }
  }
}

export function setTodoPage(page: number): TodoAction {
  return { type: TodoActionTypes.SET_TODO_PAGE, payload: page }
}
