import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
//importing browserrouter to enable routing in the app
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  //wraping App component inside BrowserRouter to enable routing
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
