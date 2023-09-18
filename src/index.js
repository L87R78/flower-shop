import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import './i18n';

import App from "./App";

import "./index.module.scss";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
