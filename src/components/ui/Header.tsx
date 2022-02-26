import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Container } from '../../share/styles'

const HeaderStyled = styled.header`
  background-color: lightslategray;
`

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeaderList = styled.ul`
  list-style: none;
  padding: 0;
`

export const Header: FC = () => {
  return (
    <HeaderStyled>
      <Container>
        <HeaderInner>
          <HeaderNav>
            <HeaderList>
              <li>
                <Link className="link" to={'/'}>
                  Home
                </Link>
              </li>
            </HeaderList>
          </HeaderNav>

          <div className="header__profile">
            <Link className="link" to={'/profile'}>
              Profile
            </Link>
          </div>
        </HeaderInner>
      </Container>
    </HeaderStyled>
  )
}
