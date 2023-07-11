import React from "react";
import styles from "./AsideArticle.module.css";

const AsideArticle = ({ className, headingText, paragraphText }) => {
  return (
    <article className={`${className} ${styles.aside}`}>
      <h3 className={styles.heading}>{headingText}</h3>
      <p className={styles.paragraphText}>{paragraphText}</p>
    </article>
  );
};

export default AsideArticle;
