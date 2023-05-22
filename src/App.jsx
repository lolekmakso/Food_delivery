import { useState } from 'react'

import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Home from './views/Home';
import Profile from './views/Profile'
import Header from './components/UI/Header/Header'


function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
