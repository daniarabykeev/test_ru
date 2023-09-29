import React from "react";
import { useDispatch } from "react-redux";
import classes from "./Styles.module.scss";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";
import { removeUser } from "../store/slices/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();
  return isAuth ? (
    <div className={classes.navbar_main}>
      <h2>Welcome, {email}</h2>
      <button onClick={() => dispatch(removeUser())}>logout</button>
    </div>
  ) : (
    <Navigate to={"/"} />
  );
};

export default Navbar;
