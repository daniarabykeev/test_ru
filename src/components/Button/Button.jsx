import classes from "./Button.module.scss";

const Button = (props) => {
    const {children, ...otherProps} = props;
  return (
    <button {...otherProps} className={classes.btn_main}>
      <a>
        <span>{children}</span>
        <i></i>
      </a>
    </button>
  );
};

export default Button;
