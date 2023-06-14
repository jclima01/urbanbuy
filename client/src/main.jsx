import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store/index.js";
import Auth0ProviderWithHistory from "./auth0-provider-with-history.jsx";
import axios from "axios";
import { PersistGate } from "redux-persist/integration/react";



axios.defaults.baseURL = "https://urbaybuy-back.up.railway.app";
// axios.defaults.baseURL = "http://localhost:2800";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Auth0ProviderWithHistory>
            <App />
          </Auth0ProviderWithHistory>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
