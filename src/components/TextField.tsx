import { TextFieldProps } from "../types";

const TextField = ({
  placeholder = "Enter text...",
  value,
  onChange,
  type = "text",
  disabled = false,
  icon,
  className = "",
  coustomClassDiv,
  name
}: TextFieldProps) => {
  return (
    <div className="flex flex-col space-y-2">
      <div
        className={`relative border border-Grey flex justify-between items-center my-2 ${coustomClassDiv} `}
      >
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`w-full px-4 py-2  bg-transparent   outline-none border-none transition-all text-white 
           ${className}`}
           name={name}
        />

        {icon && <span className="pr-3">{icon}</span>}
      </div>
    </div>
  );
};

export default TextField;
