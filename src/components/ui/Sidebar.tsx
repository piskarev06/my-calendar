import React, { Dispatch, FC, MouseEventHandler, SetStateAction } from 'react'
import styled from 'styled-components'

interface SidebarProps {
  setIsBoard: Dispatch<SetStateAction<boolean>> | any
}

const SidebarStyled = styled.ul`
  flex: 0 0 15%;

  padding: 0;
  list-style: none; ;
`

const SidebarItem = styled.li`
  text-align: center;

  font-size: 24px;
  padding: 20px;

  cursor: pointer;

  color: #fff;
  background-color: lightgrey;
  border-radius: 10px;

  margin-bottom: 20px;
`

export const Sidebar: FC<SidebarProps> = ({ setIsBoard }) => {
  return (
    <SidebarStyled>
      <SidebarItem className="sidebar__item" onClick={() => setIsBoard(false)}>
        Туду
      </SidebarItem>
      <SidebarItem className="sidebar__item" onClick={() => setIsBoard(true)}>
        Доски
      </SidebarItem>
    </SidebarStyled>
  )
}
