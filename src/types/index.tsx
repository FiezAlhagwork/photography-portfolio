export interface NavBar {
    id:number
    Link:string,
    name:string
}

export interface ButtonProps {
    disabled?: boolean;
    className?: string;
    type?: "button" | "submit" | "reset";
    onclick?: () => void;
    children: React.ReactNode;
  }
  