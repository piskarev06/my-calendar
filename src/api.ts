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

export const createTodo = async (date: number, type: any, title: string, data: any) => {
  if (type == 'todo') type = false
  else type = true
  data = [data]

  axios.post(`${API_URL}/todos`, {
    id: uuid(),
    date,
    type,
    title,
    data,
  })
}
