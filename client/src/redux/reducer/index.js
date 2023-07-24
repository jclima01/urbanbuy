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
  GET_USER_BY_ID,
  FILTER_CLIENT_USERS,
  ORDER_CLIENT_USERS,
  SEARCH_USERS,
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  GET_CART_FROM_LS,
  PAGO_EXITOSO,
  PAGO_FALLIDO,
  SET_THEME,
  SET_SLIDER_THEME,
  SET_SEARCH_BAR_THEME,
  SET_CARD_STYLE,
  SET_REVIEW,
  GET_REVIEWS,
  LOADING_PRODUCTS,
  CREATE_CHECKOUT_SESSION,
  ADD_DOMAIN,
  GET_CLIENT_ADMIN_BY_DOMAIN,
  CREATE_ORDER,
  GET_LAST_ORDER_FROM_USER,
  DELETE_PRODUCT_FROM_CART,
  REDUCE_QUANTITY_FROM_CART,
  INCREASE_QUANTITY_FROM_CART,
  CLEAR_CART,
  SET_BANNER,
  UPDATE_USER,
  SEARCH_ORDERS,
  FILTER_ORDERS,
  UPDATE_ORDER,
  ORDER_CLIENT,
  SORT_ORDERS_BY_DATE,
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
  reviews: [],
  review: {},
  loading: null,
  theme: "urbanBuy",
  sliderTheme: "urbanBuy",
  clientAdminUsers: [],
  cargando: false,
  cargo: null,
  error: null,
  searchBarTheme: "styleOne",
  cardStyle: "",
  checkoutUrl: "",
  clientAdminDomain: "",
  order: {},
  clientAdminSession: false,
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CLEAR_CART:
      const orderCart = { ...state.order };
      orderCart.cart = [];
      orderCart.total = 0;
      return {
        ...state,
        order: { ...orderCart },
      };
    case GET_CLIENT_ADMIN_BY_DOMAIN:
      return {
        ...state,
        clientAdmin: { ...payload },
      };
    case ADD_DOMAIN:
      return {
        ...state,
        clientAdminDomain: payload.domain,
        clientAdmin: payload,
      };
    case REDUCE_QUANTITY_FROM_CART:
      return {
        ...state,
        order: { ...payload.orderSaved },
        product: { ...payload.itemSaved },
      };
    case INCREASE_QUANTITY_FROM_CART:
      return {
        ...state,
        order: { ...payload.orderSaved },
        product: { ...payload.itemSaved },
      };
    case DELETE_PRODUCT_FROM_CART:
      return {
        ...state,
        order: { ...payload.orderSaved },
        product: { ...payload.itemSaved },
      };
    case GET_LAST_ORDER_FROM_USER:
      return {
        ...state,
        order: { ...payload },
      };
    case CREATE_ORDER:
      return {
        ...state,
        order: { ...payload.orderSaved },
        product: { ...payload.itemSaved },
      };
    case GET_CART_FROM_LS:
      JSON.parse(localStorage.getItem("cart"));
      return {
        ...state,
      };
    case REMOVE_PRODUCT_FROM_CART:
      let prod = state.products.find((product) => product._id === payload._id);
      const cartWhitOutProduct = state.cart.filter(
        (product) => product._id !== prod._id
      );
      localStorage.setItem("cart", JSON.stringify(cartWhitOutProduct));
      JSON.parse(localStorage.getItem("cart"));
      return {
        ...state,
        cart: cartWhitOutProduct,
      };
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        order: { ...payload.orderSaved },
        product: { ...payload.itemSaved },
      };
    case GET_USER_BY_ID:
      return {
        ...state,
        user: { ...payload },
      };
    case GET_CLIENT_ADMIN_USERS:
      return {
        ...state,
        clientAdminUsers: [...payload],
      };
    case ORDER_CLIENT_USERS:
      //eslint-disable-next-line
      let orderUsers;
      if (payload === "fullName_az") {
        orderUsers = state.clientAdminUsers.sort((a, b) =>
          a.fullName > b.fullName ? 1 : -1
        );
      } else if (payload === "fullName_za") {
        orderUsers = state.clientAdminUsers.sort((a, b) =>
          a.fullName < b.fullName ? 1 : -1
        );
      } else if (payload === "email_az") {
        orderUsers = state.clientAdminUsers.sort((a, b) =>
          a.email > b.email ? 1 : -1
        );
      } else if (payload === "email_za") {
        orderUsers = state.clientAdminUsers.sort((a, b) =>
          a.email < b.email ? 1 : -1
        );
      }
      return {
        ...state,
        clientAdminUsers: [...orderUsers],
      };
    case SEARCH_USERS:
      let searchUsers;
      searchUsers = state.clientAdminUsers.filter((user) =>
        user.fullName.toLowerCase().includes(payload.toLowerCase())
      );
      return {
        ...state,
        clientAdminUsers: [...searchUsers],
      };

    //  case FILTER_CLIENT_USERS:
    //   //eslint-disable-next-line
    //   let filteredUsers;
    //   return{
    //     ...state,
    //     //clientAdminUsers:state.clientAdminUsers.filter(e=>e.===payload)
    // }
    case DELETE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter((item) => item._id !== payload),
      };

    case EDIT_CATEGORY:
      return {
        ...state,
        categories: state.categories.map((category) => {
          if (category._id === payload._id) {
            return {
              ...category,
              ...payload,
            };
          }
          return category;
        }),
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: [...payload],
      };
    case ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, payload],
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
        products: state.products.filter((item) => item._id !== payload),
      };
    case EDIT_PRODUCT:
      return {
        ...state,
        products: payload,
      };
    case POST_NEW_PRODUCT:
      return {
        ...state,
        products: [...state.products, payload],
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
        loading: false,
      };
    case LOADING_PRODUCTS:
      return {
        ...state,
        loading: payload,
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
        clientAdminSession: true,
      };
    case REGISTER_CLIENT_ADMIN:
      return {
        ...state,
      };
    case LOGIN_USER:
      return {
        ...state,
        user: { ...payload },
        UserSession: true,
      };
    case REGISTER_USER:
      return {
        ...state,
      };

    case LOGOUT_ADMIN:
      return {
        ...state,
        admin: {},
      };

    case LOGOUT_CLIENT_ADMIN:
      return {
        ...state,
        clientAdmin: {},
        clientAdminSession: false,
      };

    case LOGOUT_USER:
      return {
        ...state,
        user: {},
        UserSession: false,
      };
    case PAGO_EXITOSO:
      return {
        ...state,
        cargando: false,
        cargo: payload,
        error: null,
      };
    case PAGO_FALLIDO:
      return {
        ...state,
        cargando: false,
        cargo: null,
        error: payload,
      };

    case SET_THEME:
      return {
        ...state,
        clientAdmin: { ...payload },
        theme:
          state.clientAdmin.theme !== "" ? state.clientAdmin.theme : "urbanBuy",
        //theme: payload,
      };

    case SET_SLIDER_THEME:
      return {
        ...state,
        sliderTheme: payload,
      };

    case SET_SEARCH_BAR_THEME:
      return {
        ...state,
        searchBarTheme: payload,
      };

    case SET_CARD_STYLE:
      return {
        ...state,
        cardStyle: payload,
      };

    case SET_REVIEW:
      return {
        ...state,
        review: {...payload}
      };

    case GET_REVIEWS:
      return {
        ...state,
        reviews: payload,
      };
    case CREATE_CHECKOUT_SESSION:
      const order = { ...state.order };

      order.cart = [];

      return {
        ...state,
        checkoutUrl: payload,
        order: order,
      };
    case ORDER_CLIENT:
      return {
        ...state,
        ordersByClient: payload,
        orders: payload,
      };
    //   case DELETE_ORDER:
    // return {
    //   ...state,
    //   orders:state.orders.filter((e)=>e._id!==payload)
    // };
    case UPDATE_ORDER:
      return {
        ...state,
        orders: [...payload],
      };

    case SORT_ORDERS_BY_DATE:
      // Utiliza el spread operator (...) para crear una copia de la lista de órdenes actual
      const sortedOrders = [...state.orders];
      if (payload === "total_min") {
        sortedOrders.sort((a, b) => a.total - b.total);
      }
      if (payload === "total_max") {
        sortedOrders.sort((a, b) => b.total - a.total);
      }
      if (payload === "date_asc") {
        // Ordena la lista de órdenes por fecha (suponiendo que tienes una propiedad "date" en cada objeto de orden)
        sortedOrders.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
      }
      if (payload === "date_des") {
        // Ordena la lista de órdenes por fecha (suponiendo que tienes una propiedad "date" en cada objeto de orden)
        sortedOrders.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
      }

      return {
        ...state,
        orders: sortedOrders,
      };
    case FILTER_ORDERS:
      return {
        ...state,
        orders: state.orders.filter((e) => e.status == payload),
      };

    case SEARCH_ORDERS:
      let searchOrders;
      searchOrders = state.orders.filter((ord) =>
        ord.fullName.toLowerCase().includes(payload.toLowerCase())
      );
      return {
        ...state,
        orders: [...searchOrders],
      };

    case UPDATE_USER:
      return {
        ...state,
        user: { ...payload },
      };

    case SET_BANNER:
      return {
        ...state,
        clientAdmin: { ...payload },
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
