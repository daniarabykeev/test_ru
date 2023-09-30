import React from "react";
import SignUp from "../../components/SignUp";
import { NavLink, useNavigate } from "react-router-dom";
import classes from "./RegisterPage.module.scss";

const RegisterPage = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      <div className={classes.register_main}>
        <h1>Register</h1>
        <SignUp />
        <div className={classes.p_group}>
          <p>already have an account?</p>
          <p onClick={() => navigate("/login")}>login</p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
