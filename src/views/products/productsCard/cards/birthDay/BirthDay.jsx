import React from "react";

import FlowerCards from "../../../../../components/flowerCards/FlowerCards";
import { productsTexts } from '../../../../../util/products';
import routes from "../../../../../util/routes";

import styles from "./BirthDay.module.scss";

const BirthDay = () => {

  return (
    <>
      <div className={styles.wrapperHeaderTexts}>
        <p className={styles.title}>{productsTexts.birthDay.title}</p>
        <p className={styles.discription}>{productsTexts.birthDay.desctription}</p>
      </div>
      <FlowerCards route={routes.birthDay} />
    </>
  );
};

export default BirthDay;
