import {
  LOGIN_ADMIN,
  LOGIN_CLIENT_ADMIN,
  LOGIN_USER,
  REGISTER_ADMIN,
  REGISTER_CLIENT_ADMIN,
  REGISTER_USER,
  LOGOUT_ADMIN,
  LOGOUT_CLIENT_ADMIN,
  LOGOUT_USER,
  GET_ALL_PRODUCTS,
  GET_PRODUCT_BY_ID,
  POST_NEW_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
  GET_ORDERS_BY_USER,
  POST_ORDER,
  GET_CATEGORIES,
  ADD_CATEGORY,
  EDIT_CATEGORY,
  DELETE_CATEGORY,
  GET_CLIENT_ADMIN_USERS,
  GET_USER_BY_ID
} from "../actions/index.js";

const initialState = {
  admin: {},
  clientAdmin: {},
  user: {},
  UserSession: false,
  products: [],
  product: {},
  categories: [],
  ordersByUser: [],
  clientAdminUsers:[],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_BY_ID:
      return {
        ...state,
        user:{...payload}
      };
    case GET_CLIENT_ADMIN_USERS:
      return {
        ...state,
        clientAdminUsers:[...payload]
      };
    case DELETE_CATEGORY:
      return {
        ...state,
      };
    case EDIT_CATEGORY:
      return {
        ...state,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: [...payload],
      };
    case ADD_CATEGORY:
      return {
        ...state,
      };
    case POST_ORDER:
      return {
        ...state,
      };
    case GET_ORDERS_BY_USER:
      return {
        ...state,
        ordersByUser: [...payload],
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(item => item._id !== payload)
      };
    case EDIT_PRODUCT:
      return {
        ...state,
      };
    case POST_NEW_PRODUCT:
      return {
        ...state,
      };
    case GET_PRODUCT_BY_ID:
      return {
        ...state,
        product: { ...payload },
      };
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: [...payload],
      };
    case LOGIN_ADMIN:
      return {
        ...state,
        admin: { ...payload },
      };
    case REGISTER_ADMIN:
      return {
        ...state,
      };
    case LOGIN_CLIENT_ADMIN:
      return {
        ...state,
        clientAdmin: { ...payload },
        UserSession: true,
      };
    case REGISTER_CLIENT_ADMIN:
      return {
        ...state,
      };
    case LOGIN_USER:
      return {
        ...state,
        user: { ...payload },
      };
    case REGISTER_USER:
      return {
        ...state,
      };

    case LOGOUT_ADMIN:
      return {
        ...state,
        admin: {},
        UserSession: false,
      };

    case LOGOUT_CLIENT_ADMIN:
      return {
        ...state,
        clientAdmin: {},
        UserSession: false,
      };

    case LOGOUT_USER:
      return {
        ...state,
        user: {},
        UserSession: false,
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
