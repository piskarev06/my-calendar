import React, { FC } from 'react'
import moment from 'moment'
import styled from 'styled-components'

interface CalendarProps {
  startDay: any
  currentDay: any
  totalDays: number
}

interface WrapperProps {
  isHeader?: boolean
}

interface CellWrapperProps extends WrapperProps {
  isWeekday?: boolean
  isSelectedMonth?: boolean
}

interface RowOfCellWrapperProps {
  justifyContent?: string
  pr?: number
}

const Wrapper = styled.div<WrapperProps>`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1px;
  background-color: ${({ isHeader }) => (isHeader ? '#1E1F21' : '#4D4C4D')};
  ${({ isHeader }) => isHeader && `border-bottom: 1px solid #4D4C4D`}
`

const CellWrapper = styled.div<CellWrapperProps>`
  min-height: ${({ isHeader }) => (isHeader ? 24 : 80)}px;
  min-width: 140px;
  background-color: ${({ isWeekday }) => (isWeekday ? '#27282A' : '#1E1F21')};
  color: ${({ isSelectedMonth }) => (isSelectedMonth ? '#DDDDDD' : '#555759')};
`

const RowOfCellWrapper = styled.div<RowOfCellWrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : 'flex-start')};
  ${({ pr }) => pr && `padding-right: ${pr * 8}px`}
`

const DayWrapper = styled.div`
  height: 31px;
  width: 31px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;
  cursor: pointer; ;
`

const CurrentDay = styled('div')`
  height: 100%;
  width: 100%;
  background: #f00;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const FlexDayWrapper = styled('div')`
  display: flex;
  justify-content: flex-end;
`

export const Calendar: FC<CalendarProps> = ({ startDay, currentDay, totalDays }) => {
  console.log(startDay, currentDay)
  const day = startDay.clone().subtract(1, 'day')
  const daysMap = [...Array(totalDays)].map(() => day.add(1, 'day').clone())

  const isCurrentDay = (day: number) => moment().isSame(day, 'day')
  const isSelectedMonth = (day: number) => currentDay.isSame(day, 'month')

  return (
    <>
      <Wrapper isHeader>
        {[...Array(7)].map((_, i) => (
          <CellWrapper isHeader isSelectedMonth key={i}>
            <RowOfCellWrapper justifyContent={'flex-end'} pr={1}>
              {moment()
                .day(i + 1)
                .format('ddd')}
            </RowOfCellWrapper>
          </CellWrapper>
        ))}
      </Wrapper>
      <Wrapper>
        {daysMap.map((dayItem) => (
          <CellWrapper
            isWeekday={dayItem.day() === 6 || dayItem.day() === 0}
            key={dayItem.unix()}
            isSelectedMonth={isSelectedMonth(dayItem)}>
            <RowOfCellWrapper justifyContent={'flex-end'}>
              <FlexDayWrapper>
                <DayWrapper>
                  {isCurrentDay(dayItem) ? (
                    <CurrentDay>{dayItem.format('D')}</CurrentDay>
                  ) : (
                    dayItem.format('D')
                  )}
                </DayWrapper>
              </FlexDayWrapper>
            </RowOfCellWrapper>
          </CellWrapper>
        ))}
      </Wrapper>
    </>
  )
}
