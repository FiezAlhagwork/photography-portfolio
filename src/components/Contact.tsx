import Button from "./Button";
import TextField from "./TextField";
// grid lg:grid-cols-2 grid-cols-1 items-center place-content-center   
const Contact = () => {
  return (
    <div className="py-16 md:py-28 bg-Black ">
      <div className="containers flex flex-col md:flex-row max-md:justify-center justify-around items-center   ">
        {/* Contact Header */}
        <div className=" max-w-80  md:ml-10 max-md:py-6 relative grid  ">
            <img src="./Misc.png" alt="" className=" absolute -top-6 -left-9 max-md:-top-1 max-md:-left-7 w-10 h-10"  />
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
          <form>
            <TextField
              placeholder="Full Name"
              type="text"
              coustomClassDiv="rounded-t-xl"
              icon={<img src="./InputIcon.png" className="w-4 h-4" />}
            />
            <TextField
              placeholder="Email Address"
              type="email"
              icon={<img src="./InputIcon.png" className="w-4 h-4" />}
            />
            <TextField
              placeholder="Phone Number"
              type="text"
              icon={<img src="./InputIcon.png" className="w-4 h-4" />}
            />

            <div
              className={`relative border border-Grey flex justify-between items-center my-2 rounded-b-xl`}
            >
              <textarea
                name=""
                id=""
                placeholder="Message"
                className=" border-none bg-transparent outline-none w-full text-White px-4 py-2 resize-none "
                rows={8}
                cols={50}
                maxLength={200}
              ></textarea>
            </div>

            <Button
              type="submit"
              className="text-Black bg-Yellow w-full font-medium "
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
