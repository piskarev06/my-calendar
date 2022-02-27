import {Dispatch} from "redux";
import axios from "axios";

import {TodoAction, TodoActionTypes} from "../../types/todo";
import { getTodosByTime } from '../../api'

export const fetchTodos = (startDayTime: number, isBoard: boolean, page = 1, limit = 4) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({type: TodoActionTypes.FETCH_TODOS})

            getTodosByTime(startDayTime, isBoard)
            .then(response => {
                dispatch({type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: response.data})
            })
            .catch(e => {
              dispatch({                
                type: TodoActionTypes.FETCH_TODOS_ERROR,
                payload: 'Произошла ошибка при загрузке списка дел'
              })
            }) 
                    
        } catch (e) {           
            dispatch({                
              type: TodoActionTypes.FETCH_TODOS_ERROR,
              payload: 'Произошла ошибка при загрузке списка дел'
            })
            
        }
    }
}
export function setTodoPage(page: number): TodoAction {
    return {type: TodoActionTypes.SET_TODO_PAGE, payload: page}
}