import React from "react";
import FooterArticle from "../FooterArticle/FooterArticle.jsx";
import styles from "./Footer.module.css";

const Footer = ({ className, footerArticlesArray }) => {
  return (
    <footer className={`${className} ${styles.footer}`}>
      {footerArticlesArray.map((item) => (
        <FooterArticle
          imageSrc={item.src}
          heading1Text={item.heading1Text}
          heading2Text={item.heading2Text}
          paragraphText={item.paragraphText}
        />
      ))}
    </footer>
  );
};

export default Footer;
