import { GET_ALL_PRODUCTS, GET_PRODUCT_BY_ID, LOGIN_ADMIN, LOGIN_CLIENT_ADMIN, LOGIN_USER, REGISTER_ADMIN, REGISTER_CLIENT_ADMIN, REGISTER_USER } from "../actions/index.js";

const initialState = {
  admin:{},
  clientAdmin:{},
  user:{},
  products:[],
  product:{}
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT_BY_ID:
      return {
        ...state,
        product: {...payload},
      };
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: [...payload],
      };
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
