import React from "react";
import styles from "./Article.module.css";

const Article = ({ className, imageSrc }) => {
  return (
    <article className={`${className} ${styles.article}`}>
      <img src={imageSrc} className={styles.hero_image}></img>
      <h1>The Bright Future of Web 3.0?</h1>
      <div>
        <p>
          We dive into the next evolution of the web that claims to put the
          power of platforms back into the hands of the people. But ist it
          really fullfilling its promise?
        </p>
        <button>Read more</button>
      </div>
    </article>
  );
};

export default Article;
