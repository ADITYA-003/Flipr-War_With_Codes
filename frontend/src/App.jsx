import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import { Routes,Route, BrowserRouter } from 'react-router-dom';
import Podcast from './components/Podcast';
import Autho from './components/autho';

function App() {
  
  return (


<Routes>
      <Route path='/' element={<Autho/>}/>
      <Route path='/upload' element={<Podcast/>}/>
        
      
      </Routes>

  
    
  )
}

export default App
