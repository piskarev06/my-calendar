import React, { FC } from 'react'
import styled from 'styled-components'

interface ControlPanelProps {
  currentDay: any
  prevHandler: () => void
  todayHandler: () => void
  nextHandler: () => void
}

const Wrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  background-color: #1e1f21;
  color: #dcdddd;
  padding: 16px;
`

const Text = styled('span')`
  font-size: 32px;
`

const Title = styled(Text)`
  font-weight: bold;
  margin-right: 8px;
`

const Buttons = styled('div')`
  display: flex;
  align-items: center;
`

const Button = styled('button')`
  border: unset;
  background-color: #565759;
  height: 20px;
  margin-right: 2px;
  border-radius: 4px;
  color: #e6e6e6;
  outline: unset;
  cursor: pointer;
`

const TodayButton = styled(Button)`
  padding-right: 16px;
  padding-left: 16px;
  font-weight: bold;
`

export const ControlPanel: FC<ControlPanelProps> = ({
  currentDay,
  prevHandler,
  todayHandler,
  nextHandler,
}) => {
  return (
    <Wrapper>
      <div>
        <Title>{currentDay.format('MMMM')}</Title>
        <Text>{currentDay.format('YYYY')}</Text>
      </div>
      <Buttons>
        <Button onClick={prevHandler}> &lt; </Button>
        <TodayButton onClick={todayHandler}>Today</TodayButton>
        <Button onClick={nextHandler}> &gt; </Button>
      </Buttons>
    </Wrapper>
  )
}
