import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <div>
      <h2>Panel klienta </h2>
      <Outlet />
    </div>
  );
};

export default Auth;
