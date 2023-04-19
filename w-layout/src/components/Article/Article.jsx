import React from "react";
import styles from "./Article.module.css";

const Article = ({ className, imageSrc }) => {
  return (
    <article className={`${className} ${styles.article}`}>
      <img src={imageSrc} className={styles.hero_image}></img>
      <h1 className={styles.heading}>The Bright Future of Web 3.0?</h1>
      <div className={styles.wrapper}>
        <p className={styles.paragraph}>
          We dive into the next evolution of the web that claims to put the
          power of platforms back into the hands of the people. But ist it
          really fullfilling its promise?
        </p>
        <button className={styles.button}>Read more</button>
      </div>
    </article>
  );
};

export default Article;
