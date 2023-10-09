/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

import boadImage from "../../assets/images/boadImage.PNG";
import flower from "../../assets/images/flower2.png";
import Video from "../../components/video/Video";

import styles from "./Home.module.scss";

const dataHome = [
  {
    id: '1',
    image: boadImage,
  },
  {
    id: '2',
    image: boadImage,
  }, {
    id: '3',
    image: boadImage,
  }, {
    id: '4',
    image: boadImage,
  }, {
    id: '5',
    image: boadImage,
  }, {
    id: '6',
    image: flower,
  }, {
    id: '7',
    image: flower,
  }, {
    id: '8',
    image: flower,
  }, {
    id: '9',
    image: flower,
  }, {
    id: '10',
    image: flower,
  },
];

const Home = () => {
  const [ t ] = useTranslation();
  const [couter, setCouter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCouter(num => num += 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleChangeColor = () => {
    if(couter % 2 === 0) {
      return <motion.div
        key={couter}
        initial={{ height: 0, opacity: 0.6 }}
        animate={{ height: '50%', opacity: 0.9 }}
        transition={{ delay: 0.2 }}
        className={styles.wrapperHome}
      >
        <div className={styles.wrapperFirstCard}>
          <div className={styles.card}>1</div>
          <div className={styles.card}>2</div>
          <div className={styles.card}>3</div>
          <div className={styles.card}>4</div>
        </div>
      </motion.div>;
    }
    return <motion.div
      key={couter}
      initial={{ height: 0, opacity: 0.6 }}
      animate={{ height: '50%', opacity: 0.9 }}
      transition={{ delay: 0.2 }}
      className={styles.wrapperHome}
    >
      <div className={styles.wrapperFirstCard}>
        <div className={styles.card}>5</div>
        <div className={styles.card}>6</div>
        <div className={styles.card}>7</div>
        <div className={styles.card}>8</div>
      </div>
    </motion.div>;
  };

  return (
    <>
      <Video />
      {handleChangeColor()}
    </>
  );
};

export default Home;
