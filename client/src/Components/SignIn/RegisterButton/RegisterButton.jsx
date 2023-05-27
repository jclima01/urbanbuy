import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const RegisterButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleRegister = () => {
    loginWithRedirect({
      screen_hint: 'signup',
    });
  };

  return (
    <button onClick={handleRegister}>Registrarse</button>
  );
};

export default RegisterButton;