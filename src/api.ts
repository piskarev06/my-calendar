import axios from 'axios'

const API_URL = 'http://localhost:5000'

export const getTodosByTime = async (startDayTime: number, isBoard: boolean) => {
  let filtr = ''
  if (isBoard) filtr = '&type=true'
  else filtr = '&type=false'

  return await axios.get(
    `${API_URL}/todos?date_gte=${startDayTime}&date_lte=${startDayTime + 86399}${filtr}`,
  )
}
