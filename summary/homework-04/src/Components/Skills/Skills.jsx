import styles from "./Skills.module.css";
import data from "../../../public/assets/data.json";

const Skills = () => {
  const dataArray = data;

  return (
    <div className={styles.skills_container}>
      {dataArray.map((item) => {
        return (
          <div
            className={`${styles.skill_container}  ${
              styles[`${item.category}`]
            }`}
            key={item.category}
          >
            <div className={styles.skill_name}>
              <img className={styles.icon} src={item.icon} />
              <span>{item.category}</span>
            </div>
            <div className={styles.skill_numbers}>
              <span className={styles.skill_numbers_score}>{item.score}</span>{" "}
              <span> / 100</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
