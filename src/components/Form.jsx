import { useState } from "react";
import classes from "./Styles.module.scss";
import Button from "./Button/Button";

const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    handleClick(email, password);
  };
  return (
    <form className={classes.form_main} onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
        required
        tabIndex={1}
        autoFocus
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        required
        tabIndex={2}
      />
      <div className={classes.form_btn}>
        <Button tabIndex={3} type={"submit"}>
          {title}
        </Button>
      </div>
    </form>
  );
};

export default Form;
