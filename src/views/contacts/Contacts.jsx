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
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d549.4137261078098!2d23.326675535389754!3d42.67158399543766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbg!4v1696233425641!5m2!1sen!2sbg"
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
