import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

const LoginAurhButton = () => {
const {loginWithRedirect} = useAuth0()
const handleClick = () => {
    loginWithRedirect({
        redirectUri: "http://localhost:5173/login"
    })
}

  return (
    <button onClick={handleClick}>LoginAurhButton</button>
  )
}

export default LoginAurhButton