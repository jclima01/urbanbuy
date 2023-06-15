import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import style from './FormLogin.module.css'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button  className={style.logAuth}onClick={() => loginWithRedirect({redirectUri: "http://localhost:5173/login"})}>Iniciar sesión con Google</button>
  );
};

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout()}>Cerrar sesión</button>
  );
};

export default function MyComponent() {
  const { isAuthenticated } = useAuth0();

  return (
    <div >
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </div>
  );
}
