import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../api/firebase";
import { Fragment } from "react";

export const Grades = () => {
  const [filteredStudentData, setFilteredStudentsData] = useState([]);
  useEffect(() => {
    const collectionRef = collection(db, "students");
    getDocs(collectionRef).then((querySnapShot) => {
      const filteredData = querySnapShot.docs.map((doc) => ({
        id: doc.id,
        studentName: doc.data().name + " " + doc.data().surname,
        grades: doc.data().grades,
      }));
      console.log(filteredData);
      setFilteredStudentsData(filteredData);
    });
  }, []);

  return (
    <div>
      <h1>Grades</h1>
      <ul>
        {filteredStudentData ? (
          filteredStudentData.map((item) => {
            return (
              <li key={item.id}>
                <p>{item.studentName}</p>
                {Object.keys(item.grades).map((subject, index) => (
                  <p key={item.id + index}>
                    {subject}
                    <ul>
                      {item.grades[subject].map((grade, idx) => (
                        <li key={idx}>{grade}</li>
                      ))}
                    </ul>
                  </p>
                ))}
              </li>
            );
          })
        ) : (
          <p>Błąd</p>
        )}
      </ul>
    </div>
  );
};
