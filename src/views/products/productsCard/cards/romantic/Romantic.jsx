/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import flower from "../../../../../assets/images/flower.png";
import iconLeafLong from "../../../../../assets/images/iconLeafLong2.png";
import { productsTexts } from '../../../../../util/products';
import routes from "../../../../../util/routes";

import styles from "./Romantic.module.scss";

const Romantic = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.wrapperHeaderTexts}>
        <p className={styles.title}>{productsTexts.romantic.title}</p>
        <p className={styles.discription}>{productsTexts.romantic.desctription}</p>
      </div>
      <div className={styles.flowers}>
        <div className={styles.flowerOne}>
          <img src={flower} alt="" />
          <p className={styles.name}>Sweet & Pretty Bouquet</p>
          <p className={styles.price}>45лв</p>
        </div>
        <div className={styles.flowerTwo}>
          <img src={flower} alt="" />
          <p className={styles.name}>Sweet & Pretty Bouquet</p>
          <p className={styles.price}>45лв</p>
        </div>
        <div className={styles.flowerThree}>
          <img src={flower} alt="" />
          <p className={styles.name}>Sweet & Pretty Bouquet</p>
          <p className={styles.price}>45лв</p>
        </div>
      </div>
      <div className={styles.flowers}>
        <div className={styles.flowerOne}>
          <img src={flower} alt="" />
          <p className={styles.name}>Sweet & Pretty Bouquet</p>
          <p className={styles.price}>45лв</p>
        </div>
        <div className={styles.flowerTwo}>
          <img src={flower} alt="" />
          <p className={styles.name}>Sweet & Pretty Bouquet</p>
          <p className={styles.price}>45лв</p>
        </div>
        <div className={styles.flowerThree}>
          <img src={flower} alt="" />
          <p className={styles.name}>Sweet & Pretty Bouquet</p>
          <p className={styles.price}>45лв</p>
        </div>
      </div>
    </>
  );
};

export default Romantic;
