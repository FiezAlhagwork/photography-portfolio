
import { animationVariants } from "../utils";
import Button from "./Button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className=" bg-White pt-3 ">
      <div className=" containers">
        {/* Header content */}
        <motion.div
          className=" flex justify-center pt-32 pb-9"
          variants={animationVariants}
          custom="down"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="text-center relative z-0 w-[500px] h-[122px]  ">
            <h1 className="font-libre text-3xl md:text-5xl  text-Black tracking-wide font-bold	 ">
              Another concept of photography
              {""}
            </h1>
            <img
              src="https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto/q_auto/v1740065433/image1_rf5tq4.png"
              className=" absolute w-60 h-4 right-5 "
              loading="lazy"
              alt="image"
            />
            <p className="text-lg text-Black py-4 font-light font-Montserrat">
              Capturing the unseen rhythms of the city.
            </p>

            <Button
              className="bg-Yellow text-White font-medium capitalize"
              aria_label="Discover"

            >
              <a href="#about">
                Discover my Journey
              </a>
              
              
            </Button>
          </div>
        </motion.div>

        {/* Header images */}
        <div className="mt-20 mb-9 flex gap-6  flex-wrap lg:flex-nowrap  md:flex-nowrap justify-center items-center  ">
          <motion.img
            src="./photo_2025-03-04_22-04-44.jpg"
            className="lg:w-[390px] h-[590px] bg-center w-full object-fill   rounded-lg shadow-xl  "
            loading="lazy"
            variants={animationVariants}
            custom="down"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            alt="image"
          />
          <motion.img
            src="./photo_2025-03-04_22-05-39.jpg"
            className="lg:w-[390px] h-[590px] w-full object-fill  max-md:object-fill top-40  rounded-lg shadow-xl "
            alt="image"
            loading="lazy"
            variants={animationVariants}
            custom="down"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          />
          <div className="flex flex-col lg:block  md:hidden   w-full">
            <motion.img
              src="./photo_2025-03-04_22-06-37.jpg"
              className="lg:w-[530px] h-[277px] w-full rounded-lg shadow-xl mb-3 "
              alt="image"
              variants={animationVariants}
              custom="down"
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.2 }}
              loading="lazy"
            />
            <motion.img
              src="./photo_2025-03-04_22-06-32.jpg"
              className="lg:w-[530px] h-[295px] w-full object-fill rounded-lg shadow-xl "
              alt="image"
              loading="lazy"
              variants={animationVariants}
              custom="down"
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.2 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
