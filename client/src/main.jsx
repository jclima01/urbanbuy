import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import store from "./redux/store/index.js";
import axios from "axios"
// axios.defaults.baseURL='http://localhost:2800'
axios.defaults.baseURL='https://urbaybuy-back.up.railway.app'
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

