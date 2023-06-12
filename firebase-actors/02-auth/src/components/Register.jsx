import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../api/firebase";

const firebaseErrors = {
  "auth/invalid-email": "E-mail is invalid",
  "auth/weak-password": "Password should be at least 6 characters",
  "auth/email-already-in-use":
    "Account registered for this e-mail is already in use",
};

const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((jwt) => {
        event.target.reset();
        console.log(jwt);
      })
      .catch((e) => {
        console.dir(e);
        alert(firebaseErrors[e.code]); //dynamiczne odczytywanie pola z obiektu
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email: </label>
        <input id="email" name="email" type="email"></input>
        <label htmlFor="password">Password: </label>
        <input id="password" name="password" type="password"></input>
        <button>Zarejsetruj się</button>
      </form>
    </div>
  );
};

export default Register;
