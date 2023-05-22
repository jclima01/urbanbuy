import axios from "axios";
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

export const getUserById = (userId) => {
  try {
    return async function (dispatch) {
      const { data } = await axios.get(
        `http://localhost:2800/users/user/${userId}`
      );
      return dispatch({
        type: GET_USER_BY_ID,
        payload: data
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
      const { data } = await axios.get(
        `http://localhost:2800/users/${clientAdminId}`
      );
      return dispatch({
        type: GET_CLIENT_ADMIN_USERS,
        payload: data
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
      const { data } = await axios.delete(
        `http://localhost:2800/category/${categoryId}`
      );
      return dispatch({
        type: DELETE_CATEGORY,
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
      const { data } = await axios.put(
        `http://localhost:2800/category/${categoryId}`,
        {
          categoryName,
        }
      );
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
      const { data } = await axios.get(
        `http://localhost:2800/category/${clientAdminId}`
      );
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
      const { data } = await axios.post(
        `http://localhost:2800/category/${clientAdminId}`,
        {
          categoryName,
        }
      );
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
      const { data } = await axios.post(
        `http://localhost:2800/orders/${userId}`,
        {
          fullName,
          status,
          payment,
          email,
          cart,
          total,
          adress,
        }
      );
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
      const { data } = await axios.get(`http://localhost:2800/orders/${userId}`);
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
      const { data } = await axios.delete(
        `http://localhost:2800/products/${productId}`
      );
      return dispatch({
        type: DELETE_PRODUCT,
        payload: data,
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
  stocks,
  imageUrl,
  price,
  rating
) => {
  try {
    return async function (dispatch) {
      const { data } = await axios.put(
        `http://localhost:2800/products/${productId}`,
        {
          productName,
          description,
          categoriesIds,
          stocks,
          imageUrl,
          price,
          rating,
        }
      );
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
      const { data } = await axios.post(
        `http://localhost:2800/products/${clientAdminId}`,
        {
          productName,
          description,
          categories,
          stocks,
          imageUrl,
          price,
          rating,
        }
      );
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
      const { data } = await axios.get(
        `http://localhost:2800/products/product/${productId}`
      );
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
      const { data } = await axios.get(
        `http://localhost:2800/products/${clientAdminId}`
      );
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
      const { data } = await axios.post("http://localhost:2800/admin/login", {
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
      const { data } = await axios.post(
        "http://localhost:2800/clientAdmin/login",
        {
          email,
          password,
        }
      );
      localStorage.setItem("dataClientAdmin", data);
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
      const { data } = await axios.post("http://localhost:2800/user/login", {
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
      await axios.post("http://localhost:2800/admin/register", {
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
      await axios.post("http://localhost:2800/clientAdmin/register", {
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
export const registerUser = (email, password, clientAdminId) => {
  try {
    return async function (dispatch) {
      await axios.post(`http://localhost:6800/users/register/${clientAdminId}`, {
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
    localStorage.removeItem("dataClientAdmin");

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
    localStorage.removeItem("dataUser");
    return async function (dispatch) {
      dispatch({
        type: LOGOUT_USER,
      });

      setTimeout(() => {
        window.location.href = "/";
      }, 100);
    };
    // eslint-disable-next-line no-unreachable
  } catch (err) {
    throw new Error(err.message);
  }
};
