import axios from "axios";
export const LOGIN_ADMIN = "LOGIN_ADMIN";
export const REGISTER_ADMIN = "REGISTER_ADMIN";
export const LOGIN_CLIENT_ADMIN = "LOGIN_CLIENT_ADMIN";
export const REGISTER_CLIENT_ADMIN = "REGISTER_CLIENT_ADMIN";
export const LOGIN_USER = "LOGIN_USER";
export const REGISTER_USER = "REGISTER_USER";

export const loginAdmin = (email,password) => {
  try {
    return async function (dispatch) {
      const { data } = await axios.post("http://localhost:2800/admin/login", {
        email,
        password,
      });
      return dispatch({
        type: LOGIN_ADMIN,
        payload: data,
      });
    };
  } catch (err) {
    throw new Error(err.message);
  }
};
export const loginClientAdmin = (email,password) => {
  try {
    return async function (dispatch) {
      const { data } = await axios.post("http://localhost:2800/clientAdmin/login", {
        email,
        password,
      });
      return dispatch({
        type: LOGIN_CLIENT_ADMIN,
        payload: data,
      });
    };
  } catch (err) {
    throw new Error(err.message);
  }
};
export const loginUser = (email,password) => {
  try {
    return async function (dispatch) {
      const { data } = await axios.post("http://localhost:2800/user/login", {
        email,
        password,
      });
      return dispatch({
        type: LOGIN_USER,
        payload: data,
      });
    };
  } catch (err) {
    throw new Error(err.message);
  }
};


export const registerAdmin = (email,password) => {
  try {
    return async function (dispatch) {
      await axios.post("http://localhost:2800/admin/register", {
        email,
        password,
      });

      return dispatch({
        type: REGISTER_ADMIN,
      });
    };
  } catch (err) {
    throw new Error(err.message);
  }
};
export const registerClientAdmin = (email,password) => {
  try {
    return async function (dispatch) {
      await axios.post("http://localhost:2800/clientAdmin/register", {
        email,
        password,
      });

      return dispatch({
        type: REGISTER_CLIENT_ADMIN,
      });
    };
  } catch (err) {
    throw new Error(err.message);
  }
};
export const registerUser = () => {
  try {
    return async function (dispatch) {
      await axios.post("http://localhost:6800/admin/register", {
        email,
        password,
      });

      return dispatch({
        type: REGISTER_USER,
      });
    };
  } catch (err) {
    throw new Error(err.message);
  }
};
