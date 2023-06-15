import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./RegisterButton.module.css";
import googleImg from "../../../assets/Google-Logo.png"

const RegisterButton = () => {
  const { loginWithRedirect } = useAuth0();
  const handleRegister =  () => {
    loginWithRedirect({
        connection: "google-oauth2",
        screen_hint: "signup",
        redirectUri: "http://localhost:5173/singin",
      });
   
  };

  return (
    <button className={style.buttonGoogle} onClick={handleRegister}>
    <img width="85px" src={googleImg} />
    </button>
  );
};

export default RegisterButton;
