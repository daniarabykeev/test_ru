import React from "react";
import SignUp from "../../components/SignUp";
import { NavLink } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div>
      <h1>register</h1>
      <SignUp />
      <p>
        already have an account? <NavLink to="/login">login</NavLink>
      </p>
    </div>
  );
};

export default RegisterPage;
