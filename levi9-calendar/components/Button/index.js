import classes from "./button.module.css";

const Button = ({
  type = "button",
  variant = "primary",
  onClick,
  children,
  disabled,
}) => {
  let combinedClasses = classes.btn;

  variant === "secondary" && (combinedClasses += ` ${classes.secondary}`);
  disabled && (combinedClasses += ` ${classes.disabled}`);

  return (
    <button
      className={combinedClasses}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;