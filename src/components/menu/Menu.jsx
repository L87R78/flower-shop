/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import facebook from "../../assets/images/facebook.png";
import logoBG from "../../assets/images/logoBG.PNG";
import logoEngland from "../../assets/images/logoEngland.PNG";
import routes from "../../util/routes";

import styles from "./Menu.module.scss";

const Menu = () => {
  const location = useLocation();
  const [t, i18n] = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShowBtn, setIsShowBtn] = useState(false);
  const [isChangeLangage, setIsChangeLangage] = useState(false);

  const handleChangeLanguage = () => {
    setIsChangeLangage(!isChangeLangage);
    i18n.changeLanguage(!isChangeLangage ? "bg" : "en");
  };

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
    switch (location.pathname) {
    case `${routes.products}`:
      return "#000";
    default:
      return "#000";
    }
  };

  return (
    <>
      <div
        className={
          !isShowBtn ? styles.containerMenuOpen : styles.containerMenuClose
        }
      >
        <header>
          <div className={styles.wrapperLanguage}>
            <img
              className={styles.iconLanguage}
              src={!isChangeLangage ? logoBG : logoEngland}
              onClick={() => handleChangeLanguage()}
              alt="language icon"
            />
            <img
              className={styles.iconFacebook}
              src={facebook}
              onClick={() => alert("Go to Facebook page")}
              alt="facebook icon" />
          </div>
          <div
            className={!isShowBtn ? styles.menuOpen : styles.menuClose}
            onClick={handleOpenMenu}
          >
            <i
              className="fa fa-bars"
              style={{ color: handleStyleMenuButton() }}
            ></i>
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
                <Link to={routes.baseURL} onClick={handleCloseMenu}>
                  Home
                </Link>
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
                <Link to={routes.products} onClick={handleCloseMenu}>
                  Occasions
                </Link>
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
                <Link to={"#"}>Roses</Link>
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
                <Link to={"#"}>Chocolates</Link>
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
                <Link to={routes.contacts} onClick={handleCloseMenu}>
                  Bouquets
                </Link>
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
                <Link to={routes.contacts} onClick={handleCloseMenu}>
                  Contacts
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Menu;
