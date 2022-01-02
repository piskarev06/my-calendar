import React, { FC } from 'react'
import { Link } from 'react-router-dom'

export const Header: FC = () => {
  return (
    <header className="menyu-navigatsig">
      <Link className="logo" to={'/'}>
        Home
      </Link>
      <input className="navigation-btn" type="checkbox" id="navigation-btn" />
      <label className="navigation-icon" htmlFor="navigation-btn">
        <span className="categorua"></span>
      </label>
      <ul className="navigation">
        <li>
          <Link to={'/'} className="nav-item brand-logo">
            Profile
          </Link>
        </li>
      </ul>
    </header>
  )
}
