import { useEffect, useState } from "react";
import logo2 from "../../../Img/logo2.png";
import style from "../../FormLogin/FormLogin.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ventas from "../../../Img/ventas.png";
import { loginUser } from "../../../redux/actions";
import LoginAuth from "../../FormLogin/LoginAuth";
import { useAuth0 } from "@auth0/auth0-react";

// Falta crear una funcion que asocie email y contraseña para dar acceso

const FormLogin = () => {
  const { user } = useAuth0();

  console.log(user);
  // useEffect(() => {
  //   if (isAuthenticated)
  //     dispatch(loginClientAdmin("jc@123.com", "123asdASD")).finally(() => {
  //       navigate("/dashboard");
  //     });
  // }, [user]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const clientAdmin = useSelector((state) => state.clientAdmin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    setPasswordError(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para procesar el inicio de sesión
    dispatch(loginUser(email, password)).finally(() => {
      navigate(`/${clientAdmin.domain}`);
    });
  };

  return (
    <div className={style.container}>
      <img
        src={ventas}
        alt=""
        style={{ width: "40vw", marginLeft: "-250px", marginRight: "50px" }}
      />

      <div>
        <Link to="/">
          <img src={logo2} alt="Logo de la empresa" className={style.logo2} />
        </Link>
        <div className={style.form}>
          <h2>Iniciar sesión</h2>
          <form onSubmit={handleSubmit} className={style.form}>
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
            <button type="submit" className={style.buttom}>
              Iniciar sesión
            </button>
          </form>
          <div>
            <LoginAuth />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
