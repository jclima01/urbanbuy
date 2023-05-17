import axios from "axios";
export const LOGIN_ADMIN = "LOGIN_ADMIN";
export const REGISTER_ADMIN = "REGISTER_ADMIN";

export const loginAdmin = () => {
  try {
    return async function (dispatch) {
      const {data} = await axios.post("http://localhost:6800/admin/login", {
        email,
        password,
      });

      return dispatch({
        type: LOGIN_ADMIN,
        payload: data
      });
    };
  } catch (err) {
    throw new Error(err.message);
  }
};
export const registerAdmin = () => {
  try {
    return async function (dispatch) {
      const {data} = await axios.post("http://localhost:6800/admin/register", {
        email,
        password,
      });

      return dispatch({
        type: REGISTER_ADMIN,
        payload: data
      });
    };
  } catch (err) {
    throw new Error(err.message);
  }
};
