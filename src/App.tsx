import React, { FC } from 'react'
import styled from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Todo } from './pages/Todo'
import { NotFound } from './pages/NotFound'
import { Header } from './components/ui/Header'

const Wrapper = styled('div')`
  border-top: 1px solid #737374;
  border-left: 1px solid #464648;
  border-right: 1px solid #464648;
  border-bottom: 2px solid #464648;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 0 1px #1a1a1a, 0 8px 20px 6px #888;
`

export const App: FC = () => {
  return (
    <BrowserRouter basename="/my-calendar">
      <Wrapper>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/todo/:id" element={<Todo />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Wrapper>
    </BrowserRouter>
  )
}
