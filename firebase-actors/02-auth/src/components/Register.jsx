const Register = () => {
  return (
    <div>
      <form>
        <label htmlFor="email">Email: </label>
        <input id="email" name="email" type="email"></input>
        <label htmlFor="password">Password: </label>
        <input id="password" name="password" type="text"></input>
        <button>Zarejsetruj się</button>
      </form>
    </div>
  );
};

export default Register;
