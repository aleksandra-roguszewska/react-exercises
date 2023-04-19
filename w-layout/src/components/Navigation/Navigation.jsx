import React from "react";
import styles from "./Navigation.module.css";

const links = [
  { linkUrl: "#", linkText: "Home" },
  { linkUrl: "#", linkText: "New" },
  { linkUrl: "#", linkText: "Popular" },
  { linkUrl: "#", linkText: "Trending" },
  { linkUrl: "#", linkText: "Categories" },
];

const Navigation = ({ imageSrc, className }) => {
  return (
    <nav className={`${styles.navigation} ${className}`}>
      <img className={styles.logo} src={imageSrc}></img>
      <ul className={styles.link_list}>
        {links.map((link, index) => (
          <li key={index}>
            <a className={styles.link} href={link.linkUrl}>
              {link.linkText}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
