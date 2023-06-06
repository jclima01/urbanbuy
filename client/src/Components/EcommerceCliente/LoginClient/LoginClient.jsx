import React, { useEffect, useState } from "react";
import logo2 from "../../../Img/logo2.png";
import style from "../../SignIn/SignIn.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../redux/actions";
import RegisterButton from "../../SignIn/RegisterButton/RegisterButton";
import { useAuth0 } from "@auth0/auth0-react";

const SignInClient = () => {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [fullName, setFullName] = useState("");
  const [fullNameError, setFullNameError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const handleFullNameChange = (e) => {
    const value = e.target.value;
    setFullName(value);
    validateFullName(value);
  };

  const validatePassword = (value) => {
    const hasUppercase = /[A-Z]/.test(value);
    const hasNumber = /\d/.test(value);
    if (value.length < 8 || !hasUppercase || !hasNumber) {
      setPasswordError(
        "La contraseña debe tener al menos 8 caracteres, incluir una mayúscula y un número."
      );
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    validateConfirmPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(email, password)).finally(() => {
      navigate("/loginClient");
    });
  };

  const validateConfirmPassword = (value) => {
    if (value !== password) {
      setConfirmPasswordError("Las contraseñas deben ser idénticas.");
    } else {
      setConfirmPasswordError("");
    }
  };

  const validateFullName = (value) => {
    const hasUppercase = /[A-Z]/.test(value);
    const hasNumber = /\d/.test(value);
    if (!hasUppercase || !hasNumber) {
      setUserError(
        "El nombre de usuario debe contener al menos una mayúscula y un número."
      );
    } else {
      setUserError("");
    }
  };

  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(value)) {
      setEmailError("Por favor, ingresa un correo electrónico válido.");
    } else {
      setEmailError("");
    }
  };

  return (
    <div className={style.container}>
      <div>
        <Link to="/homecliente">
          <img src={logo2} alt="Logo de la empresa" className={style.logo2} />
        </Link>
        <div className={style.form}>
          <h2 className={style.h2}>Registrarse</h2>
          <form onSubmit={handleSubmit} className={style.form}>
            <label htmlFor="fullName">Usuario:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Ingrese su nombre de usuario"
              value={fullName}
              onChange={handleFullNameChange}
              required
              className={style.input}
            />
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
            {passwordError && (
              <span className={style.error}>{passwordError}</span>
            )}
            <label htmlFor="password">Confirmar contraseña:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Vuelva a ingresar su contraseña"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
              className={style.input}
            />

            {confirmPasswordError && (
              <span className={style.error}>{confirmPasswordError}</span>
            )}

            <button
              type="submit"
              className={
                emailError.length === 0 && confirmPasswordError.length === 0
                  ? style.button
                  : style.errorbutton
              }
              disabled={
                emailError.length !== 0 || confirmPasswordError.length !== 0
              }
            >
              Registrarse
            </button>
          </form>
          <RegisterButton />
        </div>
      </div>
    </div>
  );
};

export default SignInClient;
