import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../api/firebase";

export const Students = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const collectionRef = collection(db, "students");
    getDocs(collectionRef).then((querySnapShot) => {
      const studentData = querySnapShot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(studentData);
      setStudents(studentData);
    });
  }, []);

  return (
    <div>
      <h1>Students</h1>
      <ul>
        {students.map((item) => (
          <li key={item.id}>
            <p>Imię: {item.name}</p>
            <p>Nazwisko: {item.surname}</p>
            <p>Klasa: {item.class}</p>
            <p>Data urodzenia: {item.birthdate}</p>
            <p>Adres: {item.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
