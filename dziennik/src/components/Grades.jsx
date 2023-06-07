import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../api/firebase";

export const Grades = () => {
  const [grades, setGrades] = useState([]);
  useEffect(() => {
    const collectionRef = collection(db, "students");
    getDocs(collectionRef).then((querySnapShot) => {
      const gradesData = querySnapShot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(gradesData);
      setGrades(gradesData);
    });
  }, []);

  return (
    <div>
      <h1>Grades</h1>
      {grades.map((item) => (
        <ul key={item.id}>
          <li>{item.name}</li>
          <li>biologia {item.grades.biologia}</li>
        </ul>
      ))}
    </div>
  );
};
