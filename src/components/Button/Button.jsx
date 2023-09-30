import React from "react";
import classes from "./Button.module.scss";

const Button = () => {
  return (
    <div className={classes.btn_main}>
      <a href="#">
        <span>Button</span>
        <i></i>
      </a>
    </div>
  );
};

export default Button;
