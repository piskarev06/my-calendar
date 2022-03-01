import { TodoAction, TodoActionTypes, TodoState } from '../../types/todo'

const initialState: TodoState = {
  todos: [],
  page: 1,
  error: null,
  limit: 10,
  loading: false,
}

export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
  switch (action.type) {
    case TodoActionTypes.FETCH_TODOS:
      return { ...state, loading: true }
    case TodoActionTypes.SET_TODO_PAGE:
      return { ...state, page: action.payload }
    case TodoActionTypes.ADD_TODO:
      return { ...state, loading: true }
    case TodoActionTypes.ACTION_TODOS_SUCCESS:
      return { ...state, loading: false, todos: action.payload }
    case TodoActionTypes.ACTION_TODOS_ERROR:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}
