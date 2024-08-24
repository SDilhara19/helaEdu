import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@styles/light_theme.scss";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "react-auth-kit";
import authStore from "@utils/authStore.js";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { userIdSlice } from "@reducers/index.js";

const store = configureStore({
  reducer: { isUserValid: userIdSlice.reducer },
  devTools: true,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider store={authStore}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);
