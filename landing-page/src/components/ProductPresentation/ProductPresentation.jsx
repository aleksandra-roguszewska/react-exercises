import styles from "./ProductPresentation.module.css";

const ProductPresentation = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.description}>
        <h2 className={styles.product_name}>MW24</h2>
        <h1 className={styles.heading}>
          Active Noise-Cancelling Wireless Headphones
        </h1>
        <button className={styles.button_get}>Get your headphones</button>
        <button className={styles.button_read}>Read more</button>
      </div>
      <img className={styles.image} src="../../../heroimage.png" />
    </div>
  );
};

export default ProductPresentation;
