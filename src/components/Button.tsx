import { ButtonProps } from "../types/index";

const Button = ({
  disabled,
  className,
  type = "button",
  onclick,
  children,
  aria_label
}: ButtonProps) => {
  return (
    <button
      type={type || "button"}
      disabled={disabled || false}
      className={` py-2 px-6 rounded-full my-1  text-sm    ${className}`}
      onClick={onclick}
      aria-label={aria_label}
    >
      {children}
    </button>
  );
};

export default Button;
