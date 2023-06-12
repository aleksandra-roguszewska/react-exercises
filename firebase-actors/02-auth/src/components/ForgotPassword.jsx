import { auth } from "../api/firebase";
import { sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
  const handlePasswordReset = (event) => {
    event.preventDefault();
    sendPasswordResetEmail(auth, event.target.email.value).catch((e) => {
      console.log(e.code);
      // alert(firebaseErrors[e.code]);
    });
  };

  return (
    <form onSubmit={handlePasswordReset}>
      <label htmlFor="email">Email: </label>
      <input id="email" name="email" type="email"></input>
      <button>Odzyskaj hasło</button>
    </form>
  );
};

export default ForgotPassword;
