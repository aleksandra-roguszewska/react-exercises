const Login = () => {
  return (
    <form>
      <label htmlFor="email">Email: </label>
      <input id="email" name="email" type="email"></input>
      <label htmlFor="password">Password: </label>
      <input id="password" name="password" type="text"></input>
      <button>Zaloguj się</button>
    </form>
  );
};

export default Login;
