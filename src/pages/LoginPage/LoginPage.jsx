import React from "react";
import Login from "../../components/Login";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <Login />
      <p>
        or <NavLink to="/register">register</NavLink>
      </p>
    </div>
  );
};

export default LoginPage;
