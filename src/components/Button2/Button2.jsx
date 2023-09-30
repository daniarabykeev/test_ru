import React from "react";
import classes from "./Button2.module.scss";

const Button2 = ({ title }) => {
  return (
    <div className={classes.btn_main}>
      <div className={classes.btn_container}>
        <a href="#">
          <span>{title}</span>
          {/* <span>BUTTON</span> */}

          <i></i>
        </a>
      </div>
    </div>
  );
};

export default Button2;
