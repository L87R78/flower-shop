/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence,motion } from "framer-motion";

import routes from "../../util/routes";

import styles from "./Menu.module.scss";

const Menu = () => {
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShowBtn, setIsShowBtn] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
    setIsShowBtn(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);

    setTimeout(() => {
      setIsShowBtn(false);
    }, 1000);
  };

  const parentVariant = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
        delay: 0.7,
      },
    },
  };

  const handleStyleMenuButton = () => {
    switch(location.pathname){
    case `${routes.products}${routes.romantic}`: return '#000';
    case `${routes.products}${routes.birthDay}`: return '#000';
    default: return '#fff';
    }
  };

  return (
    <div className={!isShowBtn ? styles.container : styles.container2}>
      <header>
        <div
          className={!isShowBtn ? styles.menuOpen : styles.menuClose}
          onClick={handleOpenMenu}
        >
          <i className="fa fa-bars" style={{ color: handleStyleMenuButton()}}></i>
        </div>
      </header>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={styles.menuContainer}
            variants={parentVariant}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={"exit"}
          >
            <div className={styles.btnClose} onClick={handleCloseMenu}>
              X
            </div>
            <motion.div
              href="/#"
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 0.6,
                },
              }}
            >
              <Link to={routes.baseURL} onClick={handleCloseMenu}>Home</Link>
            </motion.div>
            <motion.div
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 0.4,
                },
              }}
            >
              <Link to={routes.products} onClick={handleCloseMenu}>Occasions</Link>
            </motion.div>
            <motion.div
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 0.3,
                },
              }}
            >
              <Link to={"#"}>Portfolio</Link>
            </motion.div>
            <motion.div
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 0.2,
                },
              }}
            >
              <Link to={"#"}>Blog</Link>
            </motion.div>
            <motion.div
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 0.1,
                },
              }}
            >
              <Link to={routes.contacts} onClick={handleCloseMenu}>Contacts</Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
