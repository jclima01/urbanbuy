import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

const LoginAurhButton = () => {
const {loginWithRedirect} = useAuth0()
const handleClick = () => {
    loginWithRedirect({
        redirectUri: "https://urbanbuy.netlify.app/login"
    })
}
//.
  return (
    <button onClick={handleClick}>LoginAurhButton</button>
  )
}

export default LoginAurhButton