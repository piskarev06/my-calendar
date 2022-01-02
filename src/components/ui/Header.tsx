import React, { FC } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled('div')`
  background-color: #2a2b2d;
  height: 40px;
`

export const Header: FC = () => {
  return (
    <Wrapper>
      <nav className="nav">
        <ul className="nav-wrapper">
          <li className="wr">
            <Link to={'/'} className="nav-item brand-logo">
              Home
            </Link>
          </li>
          <li className="wr">
            <Link className="nav-item" to={'/'}>
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </Wrapper>
  )
}
