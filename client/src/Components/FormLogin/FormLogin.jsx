import { useState } from 'react';
import logo2 from '../../Img/logo2.png';
import style from './FormLogin.module.css'
import { useDispatch} from 'react-redux';
import {Link, useNavigate} from 'react-router-dom'
import ventas from '../../Img/ventas.png';
import { loginClientAdmin } from '../../redux/actions';

const FormLogin = () => {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const dispatch = useDispatch()
  const navigate = useNavigate()



  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para procesar el inicio de sesión
    dispatch(loginClientAdmin( email , password)).finally(()=> {
      navigate('/dashboard')
    } )
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
        <label htmlFor="username">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Ingrese su nombre de usuario"
          value={email}
          onChange={handleUsernameChange}
          required
          className={style.input}
        />
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
