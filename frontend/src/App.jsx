import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Form'
import Button from './components/Button'
import { useAuth0 } from "@auth0/auth0-react";
import Podcast from './components/Podcast'
import Sidebars from './components/Sidebar'
import Header from './components/Header'
function App() {
  
  return (
    <>
    <li>{isAuthenticated && 
    <div>
      <img src={user.picture} alt={user.name} />
    <p>{user.name}</p>
    <p>{user.email}</p>
    </div>
    }
    
    </li>
    {isAuthenticated ? 
    <li>
     <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
     Log Out
   </button>
   </li> :  
   <li>
   <button onClick={() => loginWithRedirect()}>Log In</button>;
   </li>
  }
    <Podcast/>
    {/* <Header/>
  <Sidebars/> */}
    {/* <Form/> */}
    {/* <Button/> */}
      </>
  )
}

export default App
