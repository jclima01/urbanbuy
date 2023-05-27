import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const RegisterButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleRegister = () => {
    loginWithRedirect({
      connection: 'google-oauth2',
    });
  };

  return (
    <button onClick={handleRegister}>Registrarse con Google</button>
  );
};

export default RegisterButton;