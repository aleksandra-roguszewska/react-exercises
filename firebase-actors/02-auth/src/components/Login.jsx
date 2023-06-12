import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../api/firebase";

const Login = () => {
  const firebaseErrors = {
    "auth/invalid-email": "E-mail is invalid",
    "auth/weak-password": "Password should be at least 6 characters",
    "auth/email-already-in-use":
      "Account registered for this e-mail is already in use",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email: </label>
      <input id="email" name="email" type="email"></input>
      <label htmlFor="password">Password: </label>
      <input id="password" name="password" type="text"></input>
      <button>Zaloguj się</button>
    </form>
  );
};

export default Login;
