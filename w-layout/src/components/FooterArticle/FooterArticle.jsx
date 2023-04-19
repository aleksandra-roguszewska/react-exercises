import React from "react";
import styles from "./FooterArticle.module.css";

const FooterArticle = ({
  imageSrc,
  heading1Text,
  heading2Text,
  paragraphText,
}) => {
  return (
    <article className={styles.article}>
      <img className={styles.footer_article_image} src={imageSrc}></img>
      <h3 className={styles.heading1}>{heading1Text}</h3>
      <h3 className={styles.heading2}>{heading2Text}</h3>
      <p>{paragraphText}</p>
    </article>
  );
};

export default FooterArticle;
