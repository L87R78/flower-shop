/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { Route,Routes } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import rosesLogo from './assets/images/roses.PNG';
import Menu from "./components/menu/Menu";
import routes from "./util/routes";
import Contacts from "./views/contacts/Contacts";
import Home from "./views/home/Home";
import Products from "./views/products/Products";
import ProductsCard from "./views/products/productsCard/ProductsCard";

import styles from "./App.module.scss";

const App = () => {
  const [ t, i18n] = useTranslation();
  const navigate = useNavigate ();

  return (
    <>
      <div className={styles.wrapperLogo}>
        <img src={rosesLogo} onClick={() => navigate(routes.baseURL)} alt="" />
        <p className={styles.logoText}>{t('nameOfTheShop')}</p>
      </div>
      <div className={styles.main}>
        <Routes>
          <Route path={routes.baseURL} element={<Home />} />
          <Route path={routes.contacts} element={<Contacts />} />
          <Route path={routes.products} element={<Products />} />
          <Route path={`${routes.products}${routes.romantic}`} element={<ProductsCard />} />
          <Route path={`${routes.products}${routes.birthDay}`} element={<ProductsCard />} />
        </Routes>
        <Menu />
      </div>
    </>
  );
};

export default App;
