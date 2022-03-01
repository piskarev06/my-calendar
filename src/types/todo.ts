export interface TodoType {
  id: number
  date: number
  type: boolean
  title: string
  data: string[]
}

export interface TodoState {
  todos: TodoType[]
  loading: boolean
  error: null | string
  page: number
  limit: number
}

export enum TodoActionTypes {
  FETCH_TODOS = 'FETCH_TODOS',
  ACTION_TODOS_SUCCESS = 'ACTION_TODOS_SUCCESS',
  ACTION_TODOS_ERROR = 'ACTION_TODOS_ERROR',
  SET_TODO_PAGE = 'SET_TODO_PAGE',
  ADD_TODO = 'ADD_TODO',
}
interface FetchTodoAction {
  type: TodoActionTypes.FETCH_TODOS
}
interface ActionTodoSuccessAction {
  type: TodoActionTypes.ACTION_TODOS_SUCCESS
  payload: any[] | TodoType | any
}
interface ActionTodoErrorAction {
  type: TodoActionTypes.ACTION_TODOS_ERROR
  payload: string
}
interface SetTodoPage {
  type: TodoActionTypes.SET_TODO_PAGE
  payload: number
}
interface AddTodo {
  type: TodoActionTypes.ADD_TODO
}

export type TodoAction =
  | FetchTodoAction
  | ActionTodoErrorAction
  | ActionTodoSuccessAction
  | SetTodoPage
  | AddTodo
