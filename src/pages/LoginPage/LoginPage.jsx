import React from "react";
import Login from "../../components/Login";
import { useNavigate } from "react-router-dom";
import classes from "./LoginPage.module.scss";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      <div className={classes.login_main}>
        <h1>Login</h1>
        <Login />
        <div className={classes.p_group}>
          <p>or </p>
          <p onClick={() => navigate("/register")}> register</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
