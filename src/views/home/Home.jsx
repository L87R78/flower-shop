import React from "react";
import { motion } from "framer-motion";

// // import routes from "../../util/routes";
import styles from "./Home.module.scss";

const Home = () => {

  return (
    <motion.div className={styles.homeText}>
      Бети
    </motion.div>
  );
};

export default Home;
