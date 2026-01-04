import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client"; 
import App from "./App.jsx";
import "./../styles/global.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
