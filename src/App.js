import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Chat from './pages/Chat'
import Feedback from './pages/Feedback'
import Nav from './components/Nav'
import './style/tailwind.css';
import { Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/feedback' element={<Feedback />}></Route>
        <Route path='/chat' element={<Chat />}></Route>
      </Routes>
    </>

  )
}

export default App;
