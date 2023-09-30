import React from "react";
import Login from "../../components/Login";
import { NavLink } from "react-router-dom";
import classes from "./LoginPage.module.scss";
import Button from "../../components/Button/Button";

const LoginPage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.login_main}>
        <h1>Login</h1>
        <Login />
        <p>
          or <NavLink to="/register">register</NavLink>
        </p>
        {/* <div style={{ marginTop: "50px" }}>
          <Button />
        </div> */}
      </div>
    </div>
  );
};

export default LoginPage;
