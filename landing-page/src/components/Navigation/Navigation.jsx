import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.product_name}>MW75 headphones</span>
      <button className={styles.button_get}>Get your headphones</button>
    </div>
  );
};

export default Navigation;
