import React from "react";
import ReactDOM from "react-dom/client";
import { Login } from "./pages/Login";
import { GlobalStyles } from "./global";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Elemento root não encontrado no HTML.");
}

const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Login />
  </React.StrictMode>
);
