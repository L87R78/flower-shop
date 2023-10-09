/* eslint-disable no-unused-vars */
import React from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import rosesLogo from "./assets/images/roses.PNG";
import Menu from "./components/menu/Menu";
import routes from "./util/routes";
import Contacts from "./views/contacts/Contacts";
import Home from "./views/home/Home";
import Products from "./views/products/Products";
import ProductsCard from "./views/products/productsCard/ProductsCard";

import styles from "./App.module.scss";

const App = () => {
  const location = useLocation();
  const [t] = useTranslation();
  const navigate = useNavigate();

  const handleStyleMenuButton = () => {
    switch (location.pathname) {
    case `${routes.baseURL}`:
      return "#fff";
    default:
      return "#000";
    }
  };

  return (
    <>
      <div className={styles.wrapperLogo}>
        <img src={rosesLogo} onClick={() => navigate(routes.baseURL)} alt="" />
        <p
          className={styles.logoText}
          style={{ color: handleStyleMenuButton() }}
        >
          {t("nameOfTheShop")}
        </p>
      </div>
      <div className={styles.main}>
        <Routes>
          <Route path={routes.baseURL} element={<Home />} />
          <Route path={routes.contacts} element={<Contacts />} />
          <Route path={routes.products} element={<Products />} />
          <Route
            path={`${routes.products}${routes.romantic}`}
            element={<ProductsCard />}
          />
          <Route
            path={`${routes.products}${routes.birthDay}`}
            element={<ProductsCard />}
          />
        </Routes>
        <Menu />
      </div>
    </>
  );
};

export default App;
