import React from "react";

import boadImage from "../../assets/images/boadImage.PNG";
import flower from "../../assets/images/flower2.png";
import routes from "../../util/routes";

import styles from "./FlowerCards.module.scss";

const FlowerCards = ({ route }) => {
  const habdleImage = () => {
    switch (route) {
    case routes.romantic:
      return boadImage;
    case routes.birthDay:
      return flower;
    }
  };

  return (
    <>
      <div className={styles.flowers}>
        <div className={styles.flowerOne}>
          <img src={habdleImage()} alt="" />
          <p className={styles.name}>Sweet & Pretty Bouquet</p>
          <p className={styles.price}>45лв</p>
        </div>
        <div className={styles.flowerTwo}>
          <img src={habdleImage()} alt="" />
          <p className={styles.name}>Sweet & Pretty Bouquet</p>
          <p className={styles.price}>45лв</p>
        </div>
        <div className={styles.flowerThree}>
          <img src={habdleImage()} alt="" />
          <p className={styles.name}>Sweet & Pretty Bouquet</p>
          <p className={styles.price}>45лв</p>
        </div>
      </div>
      <div className={styles.flowers}>
        <div className={styles.flowerOne}>
          <img src={habdleImage()} alt="" />
          <p className={styles.name}>Sweet & Pretty Bouquet</p>
          <p className={styles.price}>45лв</p>
        </div>
        <div className={styles.flowerTwo}>
          <img src={habdleImage()} alt="" />
          <p className={styles.name}>Sweet & Pretty Bouquet</p>
          <p className={styles.price}>45лв</p>
        </div>
        <div className={styles.flowerThree}>
          <img src={habdleImage()} alt="" />
          <p className={styles.name}>Sweet & Pretty Bouquet</p>
          <p className={styles.price}>45лв</p>
        </div>
      </div>
      <div className={styles.flowers}>
        <div className={styles.flowerOne}>
          <img src={habdleImage()} alt="" />
          <p className={styles.name}>Sweet & Pretty Bouquet</p>
          <p className={styles.price}>45лв</p>
        </div>
        <div className={styles.flowerTwo}>
          <img src={habdleImage()} alt="" />
          <p className={styles.name}>Sweet & Pretty Bouquet</p>
          <p className={styles.price}>45лв</p>
        </div>
        <div className={styles.flowerThree}>
          <img src={habdleImage()} alt="" />
          <p className={styles.name}>Sweet & Pretty Bouquet</p>
          <p className={styles.price}>45лв</p>
        </div>
      </div>
    </>
  );
};

export default FlowerCards;
