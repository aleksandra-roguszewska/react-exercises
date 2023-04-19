import React from "react";
import AsideArticle from "../AsideArticle/AsideArticle";
import styles from "./Aside.module.css";

const Aside = ({ className }) => {
  return (
    <aside className={`${className} ${styles.aside}`}>
      <h2 className={styles.heading}>New</h2>
      <AsideArticle
        headingText="Hydrogen VS Electric Cars"
        paragraphText="Will hydrogen-fueled cars ever catch up to EVs?"
      />
      <div>line</div>
      <AsideArticle
        headingText="The Downsides odf AI Artistry"
        paragraphText="What are the possible adverse effects of on-demand AI image generation?"
      />
      <div>line</div>
      <AsideArticle
        headingText="Is VC Funding drying up?"
        paragraphText="Private funding by VC firms is down 50% YOY. We take a look at what that means."
      />
    </aside>
  );
};

export default Aside;
