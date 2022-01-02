import React, { useState, FC } from 'react'
import moment from 'moment'
import { ControlPanel } from '../components/ControlPanel'
import { Calendar } from '../components/Calendar'

export const Home: FC = () => {
  moment.updateLocale('en', { week: { dow: 1 } })
  const totalDays = 42
  window.moment = moment

  const [currentDay, setCurrentDay] = useState(moment())
  const startDay = currentDay.clone().startOf('month').startOf('week')

  const prevHandler = () => setCurrentDay((prev) => prev.clone().subtract(1, 'month'))
  const todayHandler = () => setCurrentDay(moment())
  const nextHandler = () => setCurrentDay((prev) => prev.clone().add(1, 'month'))

  return (
    <>
      <ControlPanel
        currentDay={currentDay}
        prevHandler={prevHandler}
        todayHandler={todayHandler}
        nextHandler={nextHandler}
      />
      <Calendar startDay={startDay} currentDay={currentDay} totalDays={totalDays} />
    </>
  )
}
