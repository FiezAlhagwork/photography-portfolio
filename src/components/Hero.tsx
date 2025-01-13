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
          variants={animationVariants} // استخدام الحالات المخصصة
          custom="down" // تحديد الاتجاه (left, right, up, down)
          initial="hidden" // البداية
          whileInView="visible" // عند ظهور العنصر في الشاشة
          transition={{ duration: 0.8 }} // مدة التحريك
          viewport={{ once: true, amount: 0.2 }} // عرض العنصر مرة واحدة
        >
          <div className="text-center relative z-0 w-[500px] h-[122px]  ">
            <h1 className=" font-libre text-3xl md:text-5xl  text-Black tracking-wide font-bold	 ">
              Urban stories through the lens{" "}
            </h1>
            <img src="./image1.png" className=" absolute w-60 h-4 right-5 " />
            <p className="text-lg text-Black py-4 font-light font-Montserrat">
              Capturing the unseen rhythms of the city.
            </p>

            <Button className="bg-Yellow text-Black font-medium">
              Discover my Journey
            </Button>
          </div>
        </motion.div>

        {/* Header images */}
        <div className="mt-20 mb-9 flex gap-6  flex-wrap lg:flex-nowrap">
          <motion.img
            src="./image2.png"
            className="lg:w-[448px] h-[560px] w-full object-fill    "
            variants={animationVariants} // استخدام الحالات المخصصة
            custom="down" // تحديد الاتجاه (left, right, up, down)
            initial="hidden" // البداية
            whileInView="visible" // عند ظهور العنصر في الشاشة
            transition={{ duration: 0.8 }} // مدة التحريك
            viewport={{ once: true, amount: 0.2 }} // عرض العنصر مرة واحدة
          />
          <motion.img
            src="./image3.png"
            className="lg:w-[448px] h-[560px] w-full object-fill "
            alt=""
            variants={animationVariants} // استخدام الحالات المخصصة
            custom="down" // تحديد الاتجاه (left, right, up, down)
            initial="hidden" // البداية
            whileInView="visible" // عند ظهور العنصر في الشاشة
            transition={{ duration: 0.8 }} // مدة التحريك
            viewport={{ once: true, amount: 0.2 }} // عرض العنصر مرة واحدة
          />
          <div className="flex flex-col gap-6 w-full">
            <motion.img
              src="./image4.png"
              className="lg:w-[448px] h-[240px] w-full object-fill"
              alt=""
              variants={animationVariants} // استخدام الحالات المخصصة
              custom="down" // تحديد الاتجاه (left, right, up, down)
              initial="hidden" // البداية
              whileInView="visible" // عند ظهور العنصر في الشاشة
              transition={{ duration: 0.8 }} // مدة التحريك
              viewport={{ once: true, amount: 0.2 }} // عرض العنصر مرة واحدة
            />
            <motion.img
              src="./image5.png"
              className="lg:w-[448px] h-[304px] w-full object-fill"
              alt=""
              variants={animationVariants} // استخدام الحالات المخصصة
              custom="down" // تحديد الاتجاه (left, right, up, down)
              initial="hidden" // البداية
              whileInView="visible" // عند ظهور العنصر في الشاشة
              transition={{ duration: 0.8 }} // مدة التحريك
              viewport={{ once: true, amount: 0.2 }} // عرض العنصر مرة واحدة
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
