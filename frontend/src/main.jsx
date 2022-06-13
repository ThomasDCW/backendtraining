import React from "react";
import ReactDOM from "react-dom/client";
import reset, { Reset } from "styled-reset";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Reset />
    <App />
  </React.StrictMode>
);
