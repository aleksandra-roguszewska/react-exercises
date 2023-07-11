import styles from "./ProductInfo.module.css";

const info = [
  {
    title: "Intuitive ANC",
    description:
      "Adaptive Active Noise Cancellation automatically adjusts the level of noise cancellation.",
  },
  {
    title: "All-day wear",
    description:
      "Made with lightweight anodized aluminum, MW75 Headphones provide a perfect synergy of luxury and quality.",
  },
  {
    title: "28 hour battery",
    description:
      "Totaling up to 28 hours of battery life on a full charge with ANC enabled with only 15 minutes of charge.",
  },
  {
    title: "Best-in-class talk",
    description:
      "The MW75 Headphones come with 2 modes of ambient listening for improved outdoor awareness.",
  },
  {
    title: "Personalized sound",
    description:
      "Adjust your EQ with in-app sound profiles, access additional ANC modes, and download updates.",
  },
  {
    title: "Travel case",
    description:
      "For added protection while traveling, our MW75 comes with a soft felted hard shell travel case.",
  },
];

const ProductInfo = () => {
  return (
    <div className={styles.product_info_wrapper}>
      <div>
        <h3 className={styles.product_info_heading}>Important features</h3>
        <p className={styles.product_info_description}>
          Noise cancellation, re-imagined. Experience the perfect combination of
          sound and silence.
        </p>
      </div>

      <div className={styles.info_container}>
        {info.map((item) => {
          return (
            <div className={styles.info_item_container} key={item.title}>
              <h4 className={styles.info_item_heading}>{item.title}</h4>
              <p className={styles.info_item_description}>
                {" "}
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductInfo;
