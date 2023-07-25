/* eslint-disable no-console */
import React from "react";
import { motion } from "framer-motion";

// // import routes from "../../util/routes";
import styles from "./Home.module.scss";

const Home = () => {
  const now = new Date();

  const day = now.toLocaleDateString('en-US', { weekday: 'long' });

  console.log('@@@ day ', day);

  return (
    <motion.div className={styles.homeText}>
      <p>Today is: {day}</p>
    </motion.div>
  );
};

export default Home;
