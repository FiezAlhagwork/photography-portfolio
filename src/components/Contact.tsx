import { FormEvent, useState } from "react";
import { ContactFormData } from "../types";
import Button from "./Button";
import TextField from "./TextField";
import emailjs from "@emailjs/browser";
import Modal from "./Modal";
import { validateEmail } from "../utils";
import Loading from "./Loading";

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullname: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [status, setStatus] = useState<{ error?: string; message?: string }>(
    {}
  );
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };



  const services = import.meta.env.VITE_SERVICES;
  const template = import.meta.env.VITE_TEMPLATE;
  const publics = import.meta.env.VITE_PUBLIC;

  const handleSubmitData = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.fullname) {
      setStatus({ error: "Please the Enter Full Name" });
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus({ error: "Please Enter a valid email address" });
      return;
    }

    if (!formData.phoneNumber) {
      setStatus({ error: "Please the Enter Phone Number" });

      return;
    }

    if (!formData.message) {
      setStatus({ error: "Please the Enter message" });
      return;
    }

    setLoading(true);

    try {
      const result = await emailjs.send(
        services,
        template,
        {
          full_name: formData.fullname,
          phone: formData.phoneNumber,
          email: formData.email,
          message: formData.message,
        },
        publics
      );

      if (result.status === 200 && result.text === "OK") {
        setStatus({ message: "The operation was successful!" });
        setShowModal(true);
        setFormData({ fullname: "", email: "", message: "", phoneNumber: "" });
        setStatus({ error: "" });
      }
    } catch (error) {
      if (error) {
        setStatus({ error: "Opss Failed to fetch Please try agien" });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-16 md:py-28 bg-Black">
      <div className="containers flex flex-col md:flex-row max-md:justify-center justify-around items-center   ">
        {/* Contact Header */}
        <div className=" max-w-80  md:ml-10 max-md:py-6 relative grid  ">
          <img
            src="./Misc.png"
            alt="Misc"
            className=" absolute -top-6 -left-9 max-md:-top-1 max-md:-left-7 w-10 h-10"

          />
          <h2 className="text-4xl text-Smoke_White font-libre font-bold leading-[44px] ">
            {" "}
            <span className="text-Yellow">I’d love</span> to hear from you .
          </h2>
          <p className="font-Montserrat text-Smoke_White py-4 font-extralight text-sm leading-6 ">
            Whether you're interested in booking a photoshoot or just want to
            say hello, feel free to drop me a message.
          </p>
        </div>

        {/* Contact Form  */}
        <div className=" max-w-[450px]">
          <form onSubmit={handleSubmitData}>
            <TextField
              placeholder="Full Name"
              type="text"
              coustomClassDiv="rounded-t-xl"
              icon={<img src="./InputIcon.png" alt="inputIcon"  className="w-4 h-4" loading="lazy" />}
              value={formData.fullname}
              name="fullname"
              onChange={handleChange}
            />
            <TextField
              placeholder="Email Address"
              type="email"
              icon={<img src="./InputIcon.png" className="w-4 h-4" alt="inputIcon2" loading="lazy" />}
              name="email"
              onChange={handleChange}
              value={formData.email}
            />
            <TextField
              placeholder="Phone Number"
              type="text"
              icon={<img src="./InputIcon.png" className="w-4 h-4" alt="inputIcon3" loading="lazy" />}
              name="phoneNumber"
              onChange={handleChange}
              value={formData.phoneNumber}
            />

            <div
              className={`relative border border-Grey flex justify-between items-center my-2 rounded-b-xl`}
            >
              <textarea
                name="message"
                id=""
                placeholder="Message"
                className=" border-none bg-transparent outline-none w-full text-White px-4 py-2 resize-none "
                rows={8}
                cols={50}
                maxLength={200}
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <Button
              type="submit"
              className="text-Black bg-Yellow w-full font-medium"
              disabled={loading}
              aria_label="send"
            >
              Submit
            </Button>

            <span className="text-red-500 text-sm pt-3 block pl-3">
              {status.error}
            </span>
          </form>
        </div>
        {showModal && (
          <Modal
            message={"The operation was successful!"}
            onClose={() => {
              setShowModal(false);
            }}
          />
        )}

        {/* loading */}

        {loading && <Loading />}
      </div>
    </div>
  );
};

export default Contact;
