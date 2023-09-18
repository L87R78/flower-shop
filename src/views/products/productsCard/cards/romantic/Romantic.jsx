import React from "react";

import FlowerCards from "../../../../../components/flowerCards/FlowerCards";
import { productsTexts } from '../../../../../util/products';
import routes from "../../../../../util/routes";

import styles from "./Romantic.module.scss";

const Romantic = () => {

  return (
    <>
      <div className={styles.wrapperHeaderTexts}>
        <p className={styles.title}>{productsTexts.romantic.title}</p>
        <p className={styles.discription}>{productsTexts.romantic.desctription}</p>
      </div>
      <FlowerCards route={routes.romantic}/>
    </>
  );
};

export default Romantic;
