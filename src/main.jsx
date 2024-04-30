import React from "react";
import ReactDOM from "react-dom/client";
import RollingCosmeticsApp from "./RollingCosmeticsApp";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import "./main.css";
import { AuthProvider } from "./context";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <RollingCosmeticsApp />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
