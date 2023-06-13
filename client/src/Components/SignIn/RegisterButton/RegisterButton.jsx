import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import style from '../../SignIn/SignIn.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { registerClientAdmin, loginClientAdmin } from '../../../redux/actions';

const RegisterButton = () => {
  const clientAdmin = useSelector((state) => state.clientAdmin)
  const { loginWithRedirect } = useAuth0();
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useAuth0()

const handleRegister = async () => {
  try {
   await loginWithRedirect({
      connection: 'google-oauth2',
      screen_hint: 'signup',
    })
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
