import axios from 'axios'

const API_URL = 'http://localhost:5000'
// http://localhost:5000/todos?type=true

export const getAllTodos = async () => {
  return await axios.get(API_URL + '/todos')
}

export const getBoards = async () => {
  return await axios.get(API_URL + '/todos?type=true')
}

export const getTodos = async () => {
  return await axios.get(API_URL + '/todos?type=false')
}
