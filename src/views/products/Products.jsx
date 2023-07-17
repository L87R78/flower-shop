/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

import iconLeafLong from "../../assets/images/iconLeafLong2.png";
import { productsEnum, productsTitle } from '../../util/products';
import routes from '../../util/routes';

import styles from "./Products.module.scss";

const Products = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 0.98 }}
      transition={{ delay: 0.2 }}
      className={styles.wrapperProducts}
    >
      <div className={styles.content}>
        <div className={styles.leafRomantic}>
          <div className={styles.test}>
            <img src={iconLeafLong} alt="" onClick={() =>
              navigate(`${routes.products}${routes.romantic}`, { state: { numberOfproduct: productsEnum.romantic }})} />
            <p>{productsTitle[productsEnum.romantic]}</p>
          </div>
        </div>

        <div className={styles.leafBirthDay}>
          <div className={styles.test}>
            <img src={iconLeafLong} alt="" onClick={() =>
              navigate(`${routes.products}${routes.birthDay}`, { state: { numberOfproduct: productsEnum.birthDay }})} />
            <p>{productsTitle[productsEnum.birthDay]}</p>
          </div>
        </div>

        <div className={styles.leafMissYou}>
          <div className={styles.test}>
            <img src={iconLeafLong} alt="" onClick={() => {}} />
            <p>{productsTitle[productsEnum.missYou]}</p>
          </div>
        </div>

        <div className={styles.leafGoodLuck}>
          <div className={styles.test}>
            <img src={iconLeafLong} alt="" onClick={() => {}} />
            <p>{productsTitle[productsEnum.goodLuck]}</p>
          </div>
        </div>

        <div className={styles.leafThankYou}>
          <div className={styles.test}>
            <img src={iconLeafLong} alt="" onClick={() => {}} />
            <p>{productsTitle[productsEnum.thankYou]}</p>
          </div>
        </div>

        <div className={styles.leafNewBaby}>
          <div className={styles.test}>
            <img src={iconLeafLong} alt="" onClick={() => {}} />
            <p>{productsTitle[productsEnum.newBaby]}</p>
          </div>
        </div>

        <div className={styles.leafGetWell}>
          <div className={styles.test}>
            <img src={iconLeafLong} alt="" onClick={() => {}} />
            <p>{productsTitle[productsEnum.getWell]}</p>
          </div>
        </div>

        <div className={styles.leafSorry}>
          <div className={styles.test}>
            <img src={iconLeafLong} alt="" onClick={() => {}} />
            <p>{productsTitle[productsEnum.sorry]}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Products;
