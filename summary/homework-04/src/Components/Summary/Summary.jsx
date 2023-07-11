import styles from "./Summary.module.css";
import Skills from "../Skills/Skills";

const Summary = () => {
  return (
    <div className={styles.summary_container}>
      <h2 className={styles.summary_heading}>Summary</h2>
      <Skills />
      <button className={styles.continue_button}>Continue</button>
    </div>
  );
};

export default Summary;
