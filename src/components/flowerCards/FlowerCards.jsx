/* eslint-disable no-unused-vars */
import React from "react";

import boadImage from "../../assets/images/boadImage.PNG";
import flower from "../../assets/images/flower2.png";
import routes from "../../util/routes";

import styles from "./FlowerCards.module.scss";

const dataCards = [
  {
    id: 0,
    name: 'Sweet & Pretty Bouquet',
    price: '45лв'
  },
  {
    id: 1,
    name: 'Sweet & Pretty Bouquet',
    price: '2лв'
  },
  {
    id: 2,
    name: 'Sweet & Pretty Bouquet',
    price: '45лв'
  },
  {
    id: 3,
    name: 'Sweet & Pretty Bouquet',
    price: '45лв'
  },
  {
    id: 4,
    name: 'Sweet & Pretty Bouquet',
    price: '412лв'
  },
  {
    id: 5,
    name: 'Sweet & Pretty Bouquet',
    price: '45лв'
  },
  {
    id: 6,
    name: 'Sweet & Pretty Bouquet',
    price: '45лв'
  },
  {
    id: 7,
    name: 'Sweet & Pretty Bouquet',
    price: '4лв'
  },
  {
    id: 8,
    name: 'Sweet & Pretty Bouquet',
    price: '45лв'
  },
  {
    id: 9,
    name: 'Sweet & Pretty Bouquet',
    price: '145лв'
  },
  {
    id: 10,
    name: 'Sweet & Pretty Bouquet',
    price: '45лв'
  }
];

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
    <div className={styles.flowers}>
      {
        dataCards.map(flower => {
          return <div key={flower.id} className={styles.flower}>
            <img src={habdleImage()} alt="" />
            <p className={styles.name}>{flower.name}</p>
            <p className={styles.price}>{flower.price}</p>
          </div>;
        })
      }
    </div>
  );
};

export default FlowerCards;
