import React from "react";
import { motion } from "framer-motion";

// import routes from "../../util/routes";
import styles from "./Contacts.module.scss";

const Contacts = () => {

  return (
    <motion.div
      className={styles.wrapperContacts}
      animate={{
        rotate: 360,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 50
      }}
    >
      <div className={styles.content}>
        <p className={styles.contentText}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum tempora magnam incidunt maiores inventore ipsum quia cupiditate, quas, eligendi suscipit nisi ad ab earum, quos veritatis itaque necessitatibus enim qui.</p>
      </div>
      <iframe
        title="test"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d733.3788743024214!2d23.32554306964858!3d42.67162158424578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8454ac131ad5%3A0x94d2ab035046af0d!2sul.%20%22Plachkovitsa%22%202%2C%201407%20g.k.%20Lozenets%2C%20Sofia!5e0!3m2!1sen!2sbg!4v1696314616524!5m2!1sen!2sbg"
        width="98%"
        height="80%"
        // allowfullscreen=""
        loading="lazy"
        // frameBorder="0"
        style={{
          margin: 'auto',
          borderRadius: '4px',
          display: 'flex',
        }}
        referrerPolicy="no-referrer-when-downgrade"
      />
    </motion.div>
  );
};

export default Contacts;
