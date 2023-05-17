import { LOGIN_ADMIN, REGISTER_ADMIN } from "../actions/index.js";

const initialState = {
  token: "",
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_ADMIN:
      return {
        ...state,
        token: payload.token,
      };
    case REGISTER_ADMIN:
      return {
        ...state,
      };
    case LOGIN_CLIENT_ADMIN:
      return {
        ...state,
      };
    case REGISTER_CLIENT_ADMIN:
      return {
        ...state,
      };
    case LOGIN_USER:
      return {
        ...state,
      };
    case REGISTER_LOGIN_USER:
      return {
        ...state,
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
