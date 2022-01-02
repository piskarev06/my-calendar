import axios from 'axios'

const API_URL = 'http://localhost:5000'

export const getAllTodos = async () => {
  return await axios.get(API_URL + '/todos')
}
