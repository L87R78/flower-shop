import React from "react";
import { Route,Routes } from "react-router-dom";

import Menu from "./components/menu/Menu";
import Video from "./components/video/Video";
import routes from "./util/routes";
import Contacts from "./views/contacts/Contacts";
import Home from "./views/home/Home";
import Products from "./views/products/Products";
import ProductsCard from "./views/products/productsCard/ProductsCard";

import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.main}>
      <Video />
      <Routes>
        <Route path={routes.baseURL} element={<Home />} />
        <Route path={routes.contacts} element={<Contacts />} />
        <Route path={routes.products} element={<Products />} />
        <Route path={`${routes.products}${routes.romantic}`} element={<ProductsCard />} />
        <Route path={`${routes.products}${routes.birthDay}`} element={<ProductsCard />} />
      </Routes>
      <Menu />
    </div>
  );
};

export default App;
