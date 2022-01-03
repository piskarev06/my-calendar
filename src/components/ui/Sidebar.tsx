import React, { Dispatch, FC, MouseEventHandler, SetStateAction } from 'react'

interface SidebarProps {
  setIsBoard: Dispatch<SetStateAction<boolean>> | any
}
export const Sidebar: FC<SidebarProps> = ({ setIsBoard }) => {
  return (
    <ul className="sidebar">
      <li className="sidebar-item" onClick={() => setIsBoard(false)}>
        Туду
      </li>
      <li className="sidebar-item" onClick={() => setIsBoard(true)}>
        Доски
      </li>
    </ul>
  )
}
