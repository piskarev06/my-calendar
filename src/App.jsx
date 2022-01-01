import React, { useState, FC } from 'react'
import moment from 'moment'
import { Header } from './components/Header'
import { ControlPanel } from './components/ControlPanel'
import { Calendar } from './components/Calendar'
import styled from 'styled-components'

const Wrapper = styled('div')`
  border-top: 1px solid #737374;
  border-left: 1px solid #464648;
  border-right: 1px solid #464648;
  border-bottom: 2px solid #464648;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 0 1px #1a1a1a, 0 8px 20px 6px #888;
`

export const App = () => {
  moment.updateLocale('en', { week: { dow: 1 } })
  const totalDays = 42

  const [currentDay, setCurrentDay] = useState(moment())
  const startDay = currentDay.clone().startOf('month').startOf('week')

  const prevHandler = () => setCurrentDay((prev) => prev.clone().subtract(1, 'month'))
  const todayHandler = () => setCurrentDay(moment())
  const nextHandler = () => setCurrentDay((prev) => prev.clone().add(1, 'month'))

  return (
    <Wrapper>
      <Header />
      <ControlPanel
        currentDay={currentDay}
        prevHandler={prevHandler}
        todayHandler={todayHandler}
        nextHandler={nextHandler}
      />
      <Calendar startDay={startDay} currentDay={currentDay} totalDays={totalDays} />
    </Wrapper>
  )
}