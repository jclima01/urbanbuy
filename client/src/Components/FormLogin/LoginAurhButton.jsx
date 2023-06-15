import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import styles from "./LoginAurhButton.module.css"
import googleImg from "../../assets/Google-Logo.png"

const LoginAurhButton = () => {
const {loginWithRedirect} = useAuth0()
const handleClick = () => {
    loginWithRedirect({
        redirectUri: "http://localhost:5173/login"
    })
}

  return (
    <button className={styles.authBtn} onClick={handleClick}><img width="85px"  src={googleImg} /> </button>
  )
}

export default LoginAurhButton
