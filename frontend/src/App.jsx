import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Form'
import Button from './components/Button'

import Podcast from './components/Podcast'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import User from './components/User'

import Autho from './components/Autho'
import { Routes, Route } from 'react-router-dom';
function App() {

  return (
    
  <Routes>
         <Route path='/' element={<div><Autho /><Sidebar/> </div>} />
         <Route path='/upload' element ={<div><Autho/> <Podcast/> <Sidebar/> </div>}/>
         <Route path='/post' element ={<div><Autho/> <User/> <Sidebar/> </div>}/>
  </Routes>
  )
}

export default App
