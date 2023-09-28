/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

import Video from "../../components/video/Video";

import styles from "./Home.module.scss";

let num = 0;

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
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: '50%', opacity: 0.9 }}
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
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: '50%', opacity: 0.9 }}
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
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: '50%', opacity: 0.9 }}
        style={{ background: handleChangeColor() }}
        className={styles.wrapperHome}
      >
      </motion.div>
    </>
  );
};

export default Home;
