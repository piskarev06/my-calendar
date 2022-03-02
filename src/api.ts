import axios from 'axios'
import { v4 as uuid } from 'uuid'

const API_URL = 'http://localhost:5000'

export const getTodosByTime = async (startDayTime: number, isBoard: boolean) => {
  let filtr = ''
  if (isBoard) filtr = '&type=true'
  else filtr = '&type=false'

  return await axios.get(
    `${API_URL}/todos?date_gte=${startDayTime}&date_lte=${startDayTime + 86399}${filtr}`,
  )
}

export const createTodo = async (
  id: string,
  date: number,
  type: string,
  title: string,
  data: any[],
) => {
  axios.post(`${API_URL}/todos`, {
    id,
    date,
    type,
    title,
    data,
  })

  return {
    id,
    date,
    type,
    title,
    data,
  }
}
