import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Form'
import Button from './components/Button'
import { useAuth0 } from "@auth0/auth0-react";
function App() {
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();
  const { logout } = useAuth0();
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
    
   
    {/* <Form/> */}
    {/* <Button/> */}
      </>
  )
}

export default App
