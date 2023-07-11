import { addDoc, collection } from "firebase/firestore";
import styles from "./AddStudent.module.css";
import { db } from "../../config/firebase";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formDataObject = Object.fromEntries(formData.entries());
    const areAllInputsFilled = Object.values(formDataObject).every(
      (item) => item.trim() !== ""
    );

    if (areAllInputsFilled) {
      const birthday = new Date(e.target.birthday.value);

      const inputValueToGrades = (inputValue) => {
        if (inputValue.match(/\d/g)) {
          return inputValue.match(/\d/g).map(Number);
        } else {
          return [];
        }
      };

      const newUser = {
        name: e.target.name.value,
        lastName: e.target.lastName.value,
        birthday: birthday,
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

      console.log(newUser);

      addDoc(collection(db, "students"), newUser)
        .then(() => {
          toast.success("Student added successfully");
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
      <h2>Add Student</h2>
      <form className={styles.form} onSubmit={submitHandler}>
        <fieldset className={styles.form_fieldset}>
          <legend>Personal data</legend>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="lastName">Last name</label>
          <input type="text" id="lastName" name="lastName" />
          <label htmlFor="birthday">Birthday</label>
          <input type="date" id="birthday" name="birthday" />
          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="address" />
          <label htmlFor="class">Class</label>
          <input type="text" id="class" name="class" />
        </fieldset>
        <fieldset className={styles.form_fieldset}>
          <legend>Grades</legend>
          <label htmlFor="english">English</label>
          <input type="text" id="english" name="english" />
          <label htmlFor="geography">Geography</label>
          <input type="text" id="geography" name="geography" />
          <label htmlFor="history">History</label>
          <input type="text" id="history" name="history" />
          <label htmlFor="math">Math</label>
          <input type="text" id="math" name="math" />
        </fieldset>
        <fieldset className={styles.form_fieldset}>
          <legend>Notes</legend>
          <textarea id="notes" name="notes" />
        </fieldset>
        <button className={styles.button_add}>Add student</button>
      </form>
    </div>
  );
};

export default AddStudent;
