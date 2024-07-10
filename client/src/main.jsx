import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@styles/light_theme.scss";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "react-auth-kit";
import authStore from "@/utils/auth.js";
// import { configureStore } from "@reduxjs/toolkit";
// import { Provider } from "react-redux";

// const store = configureStore(
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <AuthProvider store={authStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
    {/* </Provider> */}
  </React.StrictMode>
);
