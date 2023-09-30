import classes from "./Button2.module.scss";

const Button2 = (props) => {
  const { children, ...otherProps } = props;
  return (
    <button {...otherProps} className={classes.btn_main}>
      <div className={classes.btn_container}>
        <a href="#">
          <span>{children}</span>
          <i></i>
        </a>
      </div>
    </button>
  );
};

export default Button2;
