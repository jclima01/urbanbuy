import { LOGIN_ADMIN, LOGIN_CLIENT_ADMIN, LOGIN_USER, REGISTER_ADMIN, REGISTER_CLIENT_ADMIN, REGISTER_USER } from "../actions/index.js";

const initialState = {
  admin:{},
  clientAdmin:{},
  user:{},
  UserSession: false
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_ADMIN:
      return {
        ...state,
        admin: {...payload},
      };
    case REGISTER_ADMIN:
      return {
        ...state,
      };
    case LOGIN_CLIENT_ADMIN:
      return {
        ...state,
        clientAdmin: {...payload},
        UserSession: true
      };
    case REGISTER_CLIENT_ADMIN:
      return {
        ...state,
      };
    case LOGIN_USER:
      return {
        ...state,
        user: {...payload},
      };
    case REGISTER_USER:
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
