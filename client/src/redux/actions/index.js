import axios from "axios";
// import {stripe } from 'stripe-api-library';

export const LOGIN_ADMIN = "LOGIN_ADMIN";
export const LOGIN_CLIENT_ADMIN = "LOGIN_CLIENT_ADMIN";
export const LOGIN_USER = "LOGIN_USER";
export const REGISTER_ADMIN = "REGISTER_ADMIN";
export const REGISTER_CLIENT_ADMIN = "REGISTER_CLIENT_ADMIN";
export const REGISTER_USER = "REGISTER_USER";
export const LOGOUT_ADMIN = "LOGOUT_ADMIN";
export const LOGOUT_CLIENT_ADMIN = "LOGOUT_CLIENT_ADMIN";
export const LOGOUT_USER = "LOGOUT_USER";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID";
export const POST_NEW_PRODUCT = "POST_NEW_PRODUCT";
export const EDIT_PRODUCT = "EDIT_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const GET_ORDERS_BY_USER = "GET_ORDERS_BY_USER";
export const POST_ORDER = "POST_ORDER";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const ADD_CATEGORY = "ADD_CATEGORY";
export const EDIT_CATEGORY = "EDIT_CATEGORY";
export const DELETE_CATEGORY = "DELETE_CATEGORY";
export const GET_CLIENT_ADMIN_USERS = "GET_CLIENT_ADMIN_USERS";
export const GET_USER_BY_ID = "GET_USER_BY_ID";
export const ORDER_CLIENT_USERS = "ORDER_CLIENT_USERS";
export const SEARCH_USERS = "SEARCH_USERS";
export const FILTER_CLIENT_USERS = "FILTER_CLIENT_USERS";
export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART";
export const GET_CART_FROM_LS = "GET_CART_FROM_LS";
export const PAGO_EXITOSO = "PAGO_EXITOSO";
export const PAGO_FALLIDO = "PAGO_FALLIDO";
export const LOADING_PRODUCTS = "LOADING_PRODUCTS";
export const SET_SLIDER_THEME = "SET_SLIDER_THEME";
export const SET_THEME = "SET_THEME";
export const SET_SEARCH_BAR_THEME = "SET_SEARCH_BAR_THEME";
export const SET_CARD_STYLE = "SET_CARD_STYLE";
export const CREATE_CHECKOUT_SESSION = "CREATE_CHECKOUT_SESSION";
export const ADD_DOMAIN = "ADD_DOMAIN";
export const GET_CLIENT_ADMIN_BY_DOMAIN = "GET_CLIENT_ADMIN_BY_DOMAIN";
export const CREATE_ORDER = "CREATE_ORDER";
export const GET_LAST_ORDER_FROM_USER = "GET_LAST_ORDER_FROM_USER";
export const DELETE_PRODUCT_FROM_CART = "DELETE_PRODUCT_FROM_CART";
export const REDUCE_QUANTITY_FROM_CART = "REDUCE_QUANTITY_FROM_CART";
export const INCREASE_QUANTITY_FROM_CART = "INCREASE_QUANTITY_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
export const SET_REVIEW = "SET_REVIEW";
export const GET_REVIEWS = "GET_REVIEWS";
export const ORDER_CLIENT = "ORDER_CLIENT";
// export const DELETE_ORDER = "DELETE_ORDER";
export const UPDATE_ORDER = "UPDATE_ORDER";
export const SORT_ORDERS_BY_DATE = "SORT_ORDERS_BY_DATE";
export const FILTER_ORDERS = "FILTER_ORDERS";
export const SEARCH_ORDERS = "SEARCH_ORDERS";



export const clearCart = () => {
  try {
    return async function (dispatch) {
      return await dispatch({
        type: CLEAR_CART,
      });
    };
    // eslint-disable-next-line no-unreachable
  } catch (err) {
    throw new Error(err.message);
  }
};


export const increasePoductQuantityInCart = (productId, orderId, increase) => {
  try {
    return async function (dispatch) {
      const { data } = await axios.put(`/orders/order/${orderId}`, {
        productId,
        increase,
      });
      return await dispatch({
        type: INCREASE_QUANTITY_FROM_CART,
        payload: data,
      });
    };
    // eslint-disable-next-line no-unreachable
  } catch (err) {
    throw new Error(err.message);
  }
};
export const reducePoductQuantityInCart = (productId, orderId, reduce) => {
  try {
    return async function (dispatch) {
      const { data } = await axios.put(`/orders/order/${orderId}`, {
        productId,
        reduce,
      });
      return await dispatch({
        type: REDUCE_QUANTITY_FROM_CART,
        payload: data,
      });
    };
    // eslint-disable-next-line no-unreachable
  } catch (err) {
    throw new Error(err.message);
  }
};
export const deleteProductFromCart = (productId, orderId) => {
  try {
    return async function (dispatch) {
      const { data } = await axios.put(`/orders/order/${orderId}`, {
        productId,
      });
      return await dispatch({
        type: DELETE_PRODUCT_FROM_CART,
        payload: data,
      });
    };
    // eslint-disable-next-line no-unreachable
  } catch (err) {
    throw new Error(err.message);
  }
};
export const getLastOrderFromUser = (userId) => {
  try {
    return async function (dispatch) {
      const { data } = await axios.get(`/orders/order/${userId}`);
      return await dispatch({
        type: GET_LAST_ORDER_FROM_USER,

        payload: data,
      });
    };
    // eslint-disable-next-line no-unreachable
  } catch (err) {
    throw new Error(err.message);
  }
};

export const addDomainToClientAdmin = (domain, clientAdminId) => {
  try {
    return async function (dispatch) {
      const { data } = await axios.put(`/clientAdmin/domain/${clientAdminId}`, {
        domain: domain,
      });
      return await dispatch({
        type: ADD_DOMAIN,
        payload: data,
      });
    };
    // eslint-disable-next-line no-unreachable
  } catch (err) {
    throw new Error(err.message);
  }
};

export const getClientAdminByDomain = (domain) => {
  try {
    return async function (dispatch) {
      const { data } = await axios.get(`/clientAdmin/${domain}`);
      return await dispatch({
        type: GET_CLIENT_ADMIN_BY_DOMAIN,
        payload: data,
      });
    };
    // eslint-disable-next-line no-unreachable
  } catch (err) {
    throw new Error(err.message);
  }
};

export const createOrder = (fullName, email, cart, total, userId) => {
  try {
    return async function (dispatch) {
      const { data } = await axios.post(`/orders/order/${userId}`, {
        fullName,
        email,
        cart,
        total,
      });
      return await dispatch({
        type: CREATE_ORDER,

        payload: data,
      });
    };
    // eslint-disable-next-line no-unreachable
  } catch (err) {
    throw new Error(err.message);
  }
};
export const getCartFromLS = () => {
  try {
    return async function (dispatch) {
      return await dispatch({
        type: GET_CART_FROM_LS,
      });
    };
    // eslint-disable-next-line no-unreachable
  } catch (err) {
    throw new Error(err.message);
  }
};
export const RemoveProductFromCart = (product) => {
  try {
    return async function (dispatch) {
      return dispatch({
        type: REMOVE_PRODUCT_FROM_CART,
        payload: product,
      });
    };
    // eslint-disable-next-line no-unreachable
  } catch (err) {
    throw new Error(err.message);
  }
};
export const addProductToCart = (
  productId,
  quantity,
  fullName,
  email,
  userId,
  orderId
) => {
  try {
    return async function (dispatch) {
      let data;
      if (orderId) {
        const res = await axios.put(`/orders/order/${orderId}`, {
          productId,
          quantity,
        });
        data = res.data;
      }
      if (!orderId) {
        const response = await axios.post(`/orders/order/${userId}`, {
          productId,
          quantity,
          fullName,
          email,
        });
        data = response.data;
      }

      return await dispatch({
        type: ADD_PRODUCT_TO_CART,
        payload: data,
      });
    };
    // eslint-disable-next-line no-unreachable
  } catch (err) {
    throw new Error(err.message);
  }
};
export const getUserById = (userId) => {
  try {
    return async function (dispatch) {
      const { data } = await axios.get(`/users/user/${userId}`);
      return dispatch({
        type: GET_USER_BY_ID,
        payload: { ...data },
      });
    };
    // eslint-disable-next-line no-unreachable
  } catch (err) {
    throw new Error(err.message);
  }
};
export const getClientAdminUsers = (clientAdminId) => {
  try {
    return async function (dispatch) {
      const { data } = await axios.get(`/users/${clientAdminId}`);
      return dispatch({
        type: GET_CLIENT_ADMIN_USERS,
        payload: data,
      });
    };
    // eslint-disable-next-line no-unreachable
  } catch (err) {
    throw new Error(err.message);
  }
};
export const deleteCategory = (categoryId) => {
  try {
    return async function (dispatch) {
      const { data } = await axios.delete(`/category/${categoryId}`);
      return dispatch({
        type: DELETE_CATEGORY,
        payload: categoryId,
      });
    };
    // eslint-disable-next-line no-unreachable
  } catch (err) {
    throw new Error(err.message);
  }
};
export const editCategory = (categoryId, categoryName) => {
  try {
    return async function (dispatch) {
      const { data } = await axios.put(`/category/${categoryId}`, {
        categoryName,
      });
      return dispatch({
        type: EDIT_CATEGORY,
        payload: data,
      });
    };
    // eslint-disable-next-line no-unreachable
  } catch (err) {
    throw new Error(err.message);
  }
};
export const getCategories = (clientAdminId) => {
  try {
    return async function (dispatch) {
      const { data } = await axios.get(`/category/${clientAdminId}`);
      return dispatch({
        type: GET_CATEGORIES,
        payload: data,
      });
    };
    // eslint-disable-next-line no-unreachable
  } catch (err) {
    throw new Error(err.message);
  }
};
export const addCategory = (categoryName, clientAdminId) => {
  try {
    return async function (dispatch) {
      const { data } = await axios.post(`/category/${clientAdminId}`, {
        categoryName,
      });
      return dispatch({
        type: ADD_CATEGORY,
        payload: data,
      });
    };
    // eslint-disable-next-line no-unreachable
  } catch (err) {
    throw new Error(err.message);
  }
};
export const postOrder = (
  fullName,
  status,
  payment,
  email,
  cart,
  total,
  adress,
  userId
) => {
  try {
    return async function (dispatch) {
      const { data } = await axios.post(`/orders/${userId}`, {
        fullName,
        status,
        payment,
        email,
        cart,
        total,
        adress,
      });
      return dispatch({
        type: POST_ORDER,
        payload: data,
      });
    };
    // eslint-disable-next-line no-unreachable
  } catch (err) {
    throw new Error(err.message);
  }
};
export const getOrdersByUser = (userId) => {
  try {
    return async function (dispatch) {
      const { data } = await axios.get(`/orders/${userId}`);
      return dispatch({
        type: GET_ORDERS_BY_USER,
        payload: data,
      });
    };
    // eslint-disable-next-line no-unreachable
  } catch (err) {
    throw new Error(err.message);
  }
};
export const deleteProduct = (productId) => {
  try {
    return async function (dispatch) {
      await axios.delete(`/products/delete/${productId}`);

      return dispatch({
        type: DELETE_PRODUCT,
        payload: productId,
      });
    };
    // eslint-disable-next-line no-unreachable
  } catch (err) {
    throw new Error(err.message);
  }
};

export const editProduct = (
  productId,
  productName,
  description,
  categoriesIds,
  imageUrl,
  stocks,
  price,
  rating
) => {
  try {
    return async function (dispatch) {
      const { data } = await axios.put(`/products/${productId}`, {
        productName,
        description,
        categoriesIds,
        stocks,
        imageUrl,
        price,
        rating,
      });

      return dispatch({
        type: EDIT_PRODUCT,
        payload: data,
      });
    };
    // eslint-disable-next-line no-unreachable
  } catch (err) {
    throw new Error(err.message);
  }
};
export const postNewProduct = (
  productName,
  description,
  categories,
  stocks,
  imageUrl,
  price,
  rating,
  clientAdminId
) => {
  try {
    return async function (dispatch) {
      const { data } = await axios.post(`/products/${clientAdminId}`, {
        productName,
        description,
        categories,
        stocks,
        imageUrl,
        price,
        rating,
      });
      return dispatch({
        type: POST_NEW_PRODUCT,
        payload: data,
      });
    };
    // eslint-disable-next-line no-unreachable
  } catch (err) {
    throw new Error(err.message);
  }
};
export const getProductById = (productId) => {
  try {
    return async function (dispatch) {
      const { data } = await axios.get(`/products/product/${productId}`);
      return dispatch({
        type: GET_PRODUCT_BY_ID,
        payload: data,
      });
    };
    // eslint-disable-next-line no-unreachable
  } catch (err) {
    throw new Error(err.message);
  }
};
export const getAllProducts = (clientAdminId) => {
  try {
    return async function (dispatch) {
      dispatch({
        type: LOADING_PRODUCTS,
        payload: true,
      });

      const { data } = await axios.get(`/products/${clientAdminId}`);
      return dispatch({
        type: GET_ALL_PRODUCTS,
        payload: data,
      });
    };
    // eslint-disable-next-line no-unreachable
  } catch (err) {
    throw new Error(err.message);
  }
};
export const loginAdmin = (email, password) => {
  try {
    return async function (dispatch) {
      const { data } = await axios.post("/admin/login", {
        email,
        password,
      });
      localStorage.setItem("dataAdmin", data);
      return dispatch({
        type: LOGIN_ADMIN,
        payload: data,
      });
    };
    // eslint-disable-next-line no-unreachable
  } catch (err) {
    throw new Error(err.message);
  }
};
export const loginClientAdmin = (email, password) => {
  try {
    return async function (dispatch) {
      const { data } = await axios.post("/clientAdmin/login", {
        email,
        password,
      });
      localStorage.setItem("clientAdmin", JSON.stringify(data));
      return dispatch({
        type: LOGIN_CLIENT_ADMIN,
        payload: data,
      });
    };
    // eslint-disable-next-line no-unreachable
  } catch (err) {
    throw new Error(err.message);
  }
};
export const loginUser = (email, password) => {
  try {
    return async function (dispatch) {
      const { data } = await axios.post("/users/login", {
        email,
        password,
      });
      localStorage.setItem("User", data);
      return dispatch({
        type: LOGIN_USER,
        payload: data,
      });
    };
    // eslint-disable-next-line no-unreachable
  } catch (err) {
    throw new Error(err.message);
  }
};

export const registerAdmin = (email, password) => {
  try {
    return async function (dispatch) {
      await axios.post("/admin/register", {
        email,
        password,
      });

      return dispatch({
        type: REGISTER_ADMIN,
      });
    };
    // eslint-disable-next-line no-unreachable
  } catch (err) {
    throw new Error(err.message);
  }
};
export const registerClientAdmin = (fullName, email, password) => {
  try {
    return async function (dispatch) {
      await axios.post("/clientAdmin/register", {
        fullName,
        email,
        password,
      });

      return dispatch({
        type: REGISTER_CLIENT_ADMIN,
      });
    };
    // eslint-disable-next-line no-unreachable
  } catch (err) {
    throw new Error(err.message);
  }
};
export const registerUser = (fullName, email, password, clientAdminId) => {
  try {
    return async function (dispatch) {
      await axios.post(`/users/register/${clientAdminId}`, {
        fullName,
        email,
        password,
      });

      return dispatch({
        type: REGISTER_USER,
      });
    };
    // eslint-disable-next-line no-unreachable
  } catch (err) {
    throw new Error(err.message);
  }
};

export const logOutAdmin = () => {
  try {
    localStorage.removeItem("dataAdmin");

    return async function (dispatch) {
      dispatch({
        type: LOGOUT_ADMIN,
      });

      setTimeout(() => {
        window.location.href = "/";
      }, 100);
    };
  } catch (err) {
    throw new Error(err.message);
  }
};
export const logOutClientAdmin = () => {
  try {
    localStorage.removeItem("clientAdmin");

    return async function (dispatch) {
      dispatch({
        type: LOGOUT_CLIENT_ADMIN,
      });

      // setTimeout(() => {
      window.location.href = "/";
      // }, 100);
    };
    // eslint-disable-next-line no-unreachable
  } catch (err) {
    throw new Error(err.message);
  }
};

export const logOutUser = () => {
  try {
    return async function (dispatch) {
      dispatch({
        type: LOGOUT_USER,
      });

      // setTimeout(() => {
      //   window.location.href = "/";
      // }, 100);
    };
    // eslint-disable-next-line no-unreachable
  } catch (err) {
    throw new Error(err.message);
  }
};

export const orderClientUsers = (orden) => {
  return {
    type: ORDER_CLIENT_USERS,
    payload: orden,
  };
};

export const searchUsers = (searchTerm) => ({
  type: SEARCH_USERS,
  payload: searchTerm,
});

export const setTheme = (theme) => {
  return {
    type: SET_THEME,
    payload: theme,
  };
};

export const iniciarPago = (body) => {
  return async (dispatch) => {
    try {
      // Realizar la solicitud a la API de Stripe para crear un cargo
      const cargo = await axios.post("http://localhost:2800/orders/", body);

      // Manejar la respuesta exitosa del cargo
      dispatch({
        type: PAGO_EXITOSO,
        payload: cargo.data,
      });
    } catch (error) {
      // Manejar errores durante el proceso de pago
      dispatch({
        type: PAGO_FALLIDO,
        payload: console.log(error),
      });
    }
  };
};

export const setSliderTheme = (sliderTheme) => {
  return {
    type: SET_SLIDER_THEME,
    payload: sliderTheme,
  };
};

export const setSearchBarTheme = (searchBarTheme) => {
  return {
    type: SET_SEARCH_BAR_THEME,
    payload: searchBarTheme,
  };
};

export const setCardStyle = (cardStyle) => {
  return {
    type: SET_CARD_STYLE,
    payload: cardStyle,
  };
};

export const dataEditProduct = (obj) => ({
  type: DATA_EDIT_PRODUCT,
  payload: obj,
});



export const setReview = (productId, userId, text, rating) => {
  try {
    return async function (dispatch) {
      await axios.post("/reviews/", {
        productId,
        userId,
        text,
        rating
      });

      return dispatch({
        type: SET_REVIEW,
      });
    };
    // eslint-disable-next-line no-unreachable
  } catch (err) {
    throw new Error(err.message);
  }
};

export const getReviews = (productId) => {
  try {
    return async function (dispatch) {
      const { data } = await axios.get(`/reviews/${productId}`);
      //console.log('DataAction:',productId)
      return dispatch({
        type: GET_REVIEWS,
        payload: data,
      });
    };
    // eslint-disable-next-line no-unreachable
  } catch (err) {
    throw new Error(err.message);
  }
};



export const createCheckoutSession = (cart) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        "orders/checkout/create-checkout-session",
        { cart }
      );
      return dispatch({
        type: CREATE_CHECKOUT_SESSION,
        payload: data.url,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
};

export const updateOrder = (orderId, status,clientId) => {
  try {
  return async function (dispatch) {
      const {data} = await axios.put(`/orders/orders/${orderId}`, {status,clientId});
      
      return dispatch ({
        type: UPDATE_ORDER,
        payload: data,
      });
    }
  } catch (error) {
    throw new Error(error.message)
  }
};

export const sortOrdersByDate = (valor) => ({
  type: SORT_ORDERS_BY_DATE,
  payload: valor,
});

export const filterOrders =(status) => (
{
  type: FILTER_ORDERS,
  payload: status
  }
);

export const searchOrders = (searchTerm) => ({
  type: SEARCH_ORDERS,
  payload: searchTerm,
})
export const orderClient = (clientId) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`/clientAdmin/orders/${clientId}`);
      console.log(data);
      dispatch({
        type: ORDER_CLIENT,
        payload: data,
        
      });
    } catch (error) {
     
      throw new Error("Error al obtener las órdenes del ClientAdmin");
    }
  }}

