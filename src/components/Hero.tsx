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
            <h1 className=" font-libre text-3xl md:text-5xl  text-Black tracking-wide font-bold	 ">
              Urban stories through the lens{" "}
            </h1>
            <img src="https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto/q_auto/v1740065433/image1_rf5tq4.png" className=" absolute w-60 h-4 right-5 " loading="lazy" alt="image" />
            <p className="text-lg text-Black py-4 font-light font-Montserrat">
              Capturing the unseen rhythms of the city.
            </p>

            <Button className="bg-Yellow text-Black font-medium" aria_label="Discover">
              Discover my Journey
            </Button>
          </div>
        </motion.div>

        {/* Header images */}
        <div className="mt-20 mb-9 flex gap-6  flex-wrap lg:flex-nowrap">
          <motion.img
            src="https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto/q_auto/v1740065500/gallery12_o5meld.jpg"
            className="lg:w-[448px] h-[560px] w-full object-fill  rounded-lg shadow-xl  "
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
            src="https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto/q_auto/v1740065522/gallery8_f9or42.jpg"
            className="lg:w-[448px] h-[560px] w-full object-fill rounded-lg shadow-xl "
            alt="image"
            loading="lazy"
            variants={animationVariants} 
            custom="down" 
            initial="hidden" 
            whileInView="visible" 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true, amount: 0.2 }} 
          />
          <div className="flex flex-col gap-2 md:gap-6 w-full">
            <motion.img
              src="https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto/q_auto/v1740065561/gallery3_nt8cbl.jpg"
              className="lg:w-[448px] h-[240px] w-full object-fill  rounded-lg shadow-xl "
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
              src="https://res.cloudinary.com/dtvf9kxxu/image/upload/f_auto/q_auto/v1740065585/gallery4_misltv.jpg"
              className="lg:w-[448px] h-[297px] w-full object-fill rounded-lg shadow-xl "
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
