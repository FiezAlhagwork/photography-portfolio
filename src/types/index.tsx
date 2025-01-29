export interface NavBar {
  id: number;
  Link: string;
  name: string;
}

export interface ButtonProps {
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  onclick?: () => void;
  children: React.ReactNode;
}

export interface Photo {
  id: number;
  src: string;
  alt: string;
}

export interface TextFieldProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "email" | "password" | "number";
  disabled?: boolean;
  icon?: React.ReactNode;
  className?: string;
  coustomClassDiv?:string
}
