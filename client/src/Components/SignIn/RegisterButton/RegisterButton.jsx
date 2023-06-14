import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "../../SignIn/SignIn.module.css";

const RegisterButton = () => {
  const { loginWithRedirect } = useAuth0();
  const handleRegister =  () => {
    loginWithRedirect({
        connection: "google-oauth2",
        screen_hint: "signup",
        redirectUri: "https://urbanbuy.netlify.app/login",
      });
   
  };

  return (
    <button className={style.buttonGoogle} onClick={handleRegister}>
      Registrarse con Google
    </button>
  );
};

export default RegisterButton;
