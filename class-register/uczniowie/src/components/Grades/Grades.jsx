import { Fragment, useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import styles from "./Grades.module.css";

const Grades = () => {
  const [studentsGrades, setStudentsGrades] = useState([]);

  const studentsCollectionRef = collection(db, "students");

  const getStudents = async () => {
    try {
      const data = await getDocs(studentsCollectionRef);

      const filteredData = data.docs.map((doc) => ({
        studentName: doc.data().name + " " + doc.data().lastName,
        grades: doc.data().grades,
        id: doc.id,
      }))

      setStudentsGrades(filteredData);
    } catch (error) {
      console.error(error)
    }
  }
  /*
  const grades = {
    "english": [1, 2, 3],
    "geography": [2, 3, 4],
  }

  Object.keys(grades) // ["english", "geography"]
  */

  useEffect(() => {
    getStudents();
  }, [])

  return (
    <div className={styles.container}>
      {studentsGrades ? studentsGrades.map((studentGrades) => (
        <Fragment key={studentGrades.id}>
          <p><b>Student:</b> {studentGrades.studentName}</p>
          <div>
            <p>Grades:</p>
            {/* Tu mógłby być osobny komponent */}
            {Object.keys(studentGrades.grades).map((subject, idx) => (
              <Fragment key={idx + studentGrades.id}>
                <p>{subject}</p>
                {/* I tu :) */}
                <ul>{studentGrades.grades[subject].map((grade, idx) => (
                  <li key={idx}>{grade}</li>
                  ))}</ul>
              </Fragment>
              ))}
          </div>
        </Fragment>
        )) : null}
    </div>
  )
}

export default Grades