import { ModalProps } from "../types";
import Button from "./Button";
import { MdDone } from "react-icons/md";


const Modal = ({ message, onClose }: ModalProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-Smoke_White  p-6 rounded-lg shadow-lg w-96 text-center ">
        <div className="border-[4px] border-Yellow  py-3 w-fit px-4 m-auto    rounded-full flex justify-center items-center  ">
          <MdDone size={30} className=" text-Yellow font-extrabold " />
        </div>

        <h2 className="text-xl font-bold text-Black pt-4">Success</h2>
        <p className="mt-2  font-Montserrat font-normal-medium text-gray-600">
          {message}
        </p>
        <Button
          onclick={onClose}
          className="mt-4 bg-Yellow text-Black px-4 py-2 rounded text-center font-Montserrat font-medium"
          aria_label="ok"
        >
          OK
        </Button>
      </div>
    </div>
  );
};

export default Modal;
