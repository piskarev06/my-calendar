import React, { FC } from 'react'

interface ModalProps {
  active: boolean
  setActive: any
}
export const Modal: FC<ModalProps> = ({ active, setActive, children }) => {
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div
        className={active ? 'modal__content active' : 'modal__content'}
        onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}
