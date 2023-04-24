import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
const Autho = () => {
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
    <li style={{position:"absolute",top:"2px",right:"12px"}}>
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
  </li>

      </>
  )
}

export default Autho
