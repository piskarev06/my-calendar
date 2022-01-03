import React, { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Todo } from './pages/Todo'
import { NotFound } from './pages/NotFound'
import { Header } from './components/ui/Header'

export const App: FC = () => {
  return (
    <BrowserRouter basename="/my-calendar">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/todo/:data" element={<Todo />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
