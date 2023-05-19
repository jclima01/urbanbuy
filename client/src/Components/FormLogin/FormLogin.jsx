import React, { useState } from 'react';
import logo2 from '../../Img/logo2.png';
import style from './FormLogin.module.css'
import {Link} from 'react-router-dom'
import ventas from '../../Img/ventas.png';

// Falta crear una funcion que asocie email y contraseña para dar acceso

const FormLogin = () => {
  // const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(value)) {
      setEmailError("Por favor, ingresa un correo electrónico válido.");
    } else {
      setEmailError("");
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para procesar el inicio de sesión
    console.log('Usuario:', username);
    console.log('Contraseña:', password);
  };

  return (
    <div className={style.container}>
    
      <img src={ventas} alt="" style={{width:'40vw', marginLeft:'-250px', marginRight:'50px'}}/>
      
    <div >
        <Link to='/'>
      <img src={logo2} alt="Logo de la empresa" className={style.logo2} />
      </Link>
      <div className={style.form}>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit} className={style.form}>
        {/* <label htmlFor="username">Usuario:</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Ingrese su nombre de usuario"
          value={username}
          onChange={handleUsernameChange}
          required
          className={style.input}
        /> */}
        <label htmlFor="correo electronico">Correo electrónico:</label>
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
              className={style.input}
            />
            {emailError && <span className={style.error}>{emailError}</span>}
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Ingrese su contraseña"
          value={password}
          onChange={handlePasswordChange}
          required
          className={style.input}
        />
        <button type="submit" className={style.buttom}>Iniciar sesión</button>
      </form>
      
      </div>
    </div>

    </div>
  );
};

export default FormLogin;
