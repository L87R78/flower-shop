
import React from "react";
import { useLocation,useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import iconLeafLong from "../../../assets/images/iconLeafLong2.png";
import { productsEnum } from '../../../util/products';
import routes from "../../../util/routes";

import BirthDay from "./cards/birthDay/BirthDay";
import Romantic from "./cards/romantic/Romantic";

import styles from "./ProductsCard.module.scss";

const ProductsCard = () => {
  const navigate = useNavigate();
  const { numberOfproduct } = useLocation().state;

  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 0.99 }}
      transition={{ delay: 0 }}
      className={styles.wrapperInfoProducts}
    >
      <div className={styles.wrapperBtnBack}>
        <img src={iconLeafLong} alt="" onClick={() => navigate(routes.products)} />
        <p>Back</p>
      </div>
      <motion.div
        initial={{ y: 0, opacity: 0.6 }}
        animate={{ y: 0, opacity: 0.99 }}
        transition={{ delay: 0.4 }}
        className={styles.wrapperContent}
      >
        { numberOfproduct === productsEnum.romantic && <Romantic /> }
        { numberOfproduct === productsEnum.birthDay && <BirthDay /> }
      </motion.div>
    </motion.div>
  );
};

export default ProductsCard;
