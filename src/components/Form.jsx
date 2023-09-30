import React, { useState } from "react";
import classes from "./Styles.module.scss";
import Button2 from "./Button2/Button2";

const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={classes.form_main}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <div className={classes.form_btn}>
        <Button2 onClick={() => handleClick(email, password)} title={title} />
      </div>
    </div>
  );
};

export default Form;
