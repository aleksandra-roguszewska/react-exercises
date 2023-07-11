import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Students = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const studentsCollectionRef = collection(db, "students");
  const getStudents = async () => {
    try {
      const data = await getDocs(studentsCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setStudents(filteredData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <div>
      {students
        ? students.map((student) => {
            const birthday = student?.birthday?.toDate().toDateString();

            return (
              <ul key={student.id}>
                <li>
                  {student.name} {student.lastName}
                </li>
                <li>{birthday}</li>
                <li>{student.address}</li>
                <li>{student.class}</li>
                <li>
                  <button
                    onClick={() =>
                      navigate(`/students/edit/${student.id}`, {
                        state: { student },
                      })
                    }
                  >
                    Edit student
                  </button>
                </li>
              </ul>
            );
          })
        : null}
      <button onClick={() => navigate("/students/add")}>Add student</button>
    </div>
  );
};
export default Students;
