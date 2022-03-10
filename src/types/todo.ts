export interface TodoType {
  id: number
  date: number
  type: boolean
  title: string
  data: any[]
  isComplete: boolean
}

export interface TodoState {
  todos: TodoType[]
  loading: boolean
  error: null | string
  page: number
  limit: number
}

export enum TodoActionTypes {
  ACTION_TODOS_ERROR = 'ACTION_TODOS_ERROR',

  FETCH_TODOS = 'FETCH_TODOS',
  FETCH_TODOS_SUCCESS = 'ACTION_TODOS_SUCCESS',
  SET_TODO_PAGE = 'SET_TODO_PAGE',
  ADD_TODO = 'ADD_TODO',
  ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS',
}
interface ActionTodoErrorAction {
  type: TodoActionTypes.ACTION_TODOS_ERROR
  payload: string
}
interface FetchTodoAction {
  type: TodoActionTypes.FETCH_TODOS
}
interface FetchTodoSuccessAction {
  type: TodoActionTypes.FETCH_TODOS_SUCCESS
  payload: any[] | TodoType | any
}
interface SetTodoPage {
  type: TodoActionTypes.SET_TODO_PAGE
  payload: number
}
interface AddTodoAction {
  type: TodoActionTypes.ADD_TODO
}
interface AddTodoSuccessAction {
  type: TodoActionTypes.ADD_TODO_SUCCESS
}

export type TodoAction =
  | FetchTodoAction
  | ActionTodoErrorAction
  | FetchTodoSuccessAction
  | SetTodoPage
  | AddTodoAction
  | AddTodoSuccessAction
