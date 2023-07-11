import styles from "./Result.module.css";

const Result = () => {
  return (
    <div className={styles.result_container}>
      <h2 className={styles.result_heading}>Your result</h2>
      <div className={styles.score_container}>
        <span className={styles.score_final}>76</span>
        <span className={styles.score_max}>of 100</span>
      </div>
      <div className={styles.feedback_container}>
        <h3 className={styles.feedback_heading}>Great</h3>
        <p className={styles.feedback_text}>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
};

export default Result;
