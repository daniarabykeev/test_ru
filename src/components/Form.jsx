import { useState } from "react";
import classes from "./Styles.module.scss";
import Button2 from "./Button2/Button2";

const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
      e.preventDefault()
      handleClick(email, password)
  }
  return (
    <form className={classes.form_main} onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        required
      />
      <div className={classes.form_btn}>
          <Button type={'submit'}>
              {title}
          </Button>
        //<Button2 onClick={() => handleClick(email, password)} title={title} />
      </div>
    </form>
  );
};

export default Form;
