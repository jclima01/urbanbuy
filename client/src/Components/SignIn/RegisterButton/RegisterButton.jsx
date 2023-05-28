import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch } from 'react-redux';
import { registerClientAdmin } from '../../../redux/actions';

const RegisterButton = () => {
  const { loginWithRedirect } = useAuth0();
  const {user} = useAuth0();
  console.log(user)
const dispatch = useDispatch()
const das = window.location.origin + window.location.pathname 
console.log(das)
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