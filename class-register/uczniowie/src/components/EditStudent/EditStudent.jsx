import { updateDoc, doc } from "firebase/firestore";
import styles from "./EditStudent.module.css";
import { db } from "../../config/firebase";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const EditStudent = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const studentId = location.state.student.id;
  console.log(studentId);

  const updateHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formDataObject = Object.fromEntries(formData.entries());
    const areAllInputsFilled = Object.values(formDataObject).every(
      (item) => item.trim() !== ""
    );

    if (areAllInputsFilled) {
      const inputValueToGrades = (inputValue) => {
        if (inputValue.match(/\d/g)) {
          return inputValue.match(/\d/g).map(Number);
        } else {
          return [];
        }
      };

      const updatedUser = {
        name: e.target.name.value,
        lastName: e.target.lastName.value,
        address: e.target.address.value,
        class: e.target.class.value,
        grades: {
          geography: inputValueToGrades(e.target.geography.value),
          english: inputValueToGrades(e.target.english.value),
          history: inputValueToGrades(e.target.history.value),
          math: inputValueToGrades(e.target.math.value),
        },
        notes: e.target.notes.value,
      };

      updateDoc(doc(db, "students", studentId), updatedUser)
        .then(() => {
          toast.success("Student data edited successfully");
          e.target.reset();
          navigate("/students");
        })
        .catch(() => {
          toast.error("Error appeared. Try again later");
        });
    } else {
      toast.error("Please fill out all form fields");
    }
  };

  return (
    <div className={styles.container}>
      <h2>Edit student</h2>
      <form className={styles.form} onSubmit={updateHandler}>
        <fieldset className={styles.form_fieldset}>
          <legend>Personal data</legend>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={location.state.student.name}
          />
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            defaultValue={location.state.student.lastName}
          />
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            defaultValue={location.state.student.address}
          />
          <label htmlFor="class">Class</label>
          <input
            type="text"
            id="class"
            name="class"
            defaultValue={location.state.student.class}
          />
        </fieldset>
        <fieldset className={styles.form_fieldset}>
          <legend>Grades</legend>
          <label htmlFor="english">English</label>
          <input
            type="text"
            id="english"
            name="english"
            defaultValue={location.state.student.grades.english.toString()}
          />
          <label htmlFor="geography">Geography</label>
          <input
            type="text"
            id="geography"
            name="geography"
            defaultValue={location.state.student.grades.geography.toString()}
          />
          <label htmlFor="history">History</label>
          <input
            type="text"
            id="history"
            name="history"
            defaultValue={location.state.student.grades.history.toString()}
          />
          <label htmlFor="math">Math</label>
          <input
            type="text"
            id="math"
            name="math"
            defaultValue={location.state.student.grades.math.toString()}
          />
        </fieldset>
        <fieldset className={styles.form_fieldset}>
          <legend>Notes</legend>
          <textarea
            id="notes"
            name="notes"
            defaultValue={location.state.student.notes.toString()}
          />
        </fieldset>
        <button className={styles.button}>Save changes</button>
        <button
          className={styles.button}
          type="button"
          onClick={() => navigate("/students")}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditStudent;
