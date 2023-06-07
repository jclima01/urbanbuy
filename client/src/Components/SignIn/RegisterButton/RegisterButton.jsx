import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import style from '../../SignIn/SignIn.module.css'

const RegisterButton = () => {
  const { loginWithRedirect } = useAuth0();

const handleRegister = async () => {
  try {
    await loginWithRedirect({
      connection: 'google-oauth2',
      screen_hint: 'signup',
    });

    // El usuario se ha registrado exitosamente
  } catch (error) {
    // Error en el registro
    throw new Error('Error al registrar el usuario', error);
  }
};

  return (
    <button className={style.buttonGoogle} onClick={handleRegister}>Registrarse con Google</button>
  );
};

export default RegisterButton;