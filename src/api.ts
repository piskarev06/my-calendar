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

// http://localhost:5000/todos?type=true

// export const getBoards = async () => {
//   return await axios.get(API_URL + '/todos?type=true')
// }

// export const getTodos = async () => {
//   return await axios.get(API_URL + '/todos?type=false')
// }

// export const getCurrentTodos = async (isBoard: boolean) => {
//   if (isBoard) return getBoards()
//   else return getTodos()
// }

// 86399   /todos?date_gte=${startDayQuery}&date_lte=${endDayQuery}
