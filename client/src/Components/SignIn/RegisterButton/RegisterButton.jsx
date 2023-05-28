import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const RegisterButton = () => {
  const { loginWithRedirect } = useAuth0();

const handleRegister = async () => {
  try {
    await loginWithRedirect({
      connection: 'google-oauth2',
      screen_hint: 'signup',
    });

    // El usuario se ha registrado exitosamente
    console.log('Usuario registrado con éxito');
  } catch (error) {
    // Error en el registro
    console.error('Error al registrar el usuario', error);
  }
};

  return (
    <button onClick={handleRegister}>Registrarse con Google</button>
  );
};

export default RegisterButton;