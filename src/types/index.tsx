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
  aria_label:string
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
  name:string
}

export interface ContactFormData  {
  fullname: string
  email: string
  phoneNumber: string
  message: string
}

export interface ModalProps {
  message? : string
  onClose : () => void
}

export interface videos {
  id: number,
  title: string,
  thumbnail: string,
  videoUrl: string
}


export interface VideoGalleryProps {
  heightVideo :string
  videos:videos[]
  slidesPerView:number[]
}