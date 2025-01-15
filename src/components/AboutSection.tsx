import { useState } from "react";
import { Accordions } from "../constant";
import { IoMdClose } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import {AnimatePresence, motion } from "framer-motion"
import { animationVariants } from "../utils";





const AboutSection = () => {
  const [openSection, setOpenSection] = useState<string | null>("");

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const accordionAnimation = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
    exit: { opacity: 0, height: 0 },
  };
  return (
    <AnimatePresence>
    <div className="bg-Smoke_White my-16">
      <motion.div className=" containers flex-col flex lg:flex-row justify-between items-center py-20    ">

        <motion.div className="lg:w-[450px] w-full text-center mx-16 order-2 " 
            variants={animationVariants} 
            custom="right" 
            initial="hidden"
            whileInView="visible"      
            transition={{ duration: 0.8 }}   
            viewport={{ once: true, amount: 0.2 }} >
          <div>
            <h2 className="text-3xl font-bold text-Black font-libre">
              Hello! I'm Abdullah
            </h2>
            <p className="pt-1 pb-5 font-extralight text-lg">
              A connoisseur of cityscapes and a storyteller through the lens,
              based in the vibrant heart of Damascus.{" "}
            </p>
            <p className=" font-extralight text-lg">
              With over a decade of experience, I have been capturing the
              essence of urban life, one frame at a time.
            </p>
          </div>

            {/*================= start Accordions =============== */}
            <div className="mt-3">
      {Accordions.map((items) => (
        <div key={items.nameAccordin}>
          <button
            className="flex justify-between w-full py-2 text-left text-sm font-Montserrat font-medium focus:outline-none border-t"
            onClick={() => toggleSection(items.nameAccordin)}
          >
            <span>My {items.nameAccordin}</span>
            {openSection === items.nameAccordin ? (
              <IoMdClose size={20} />
            ) : (
              <GoPlus size={20} />
            )}
          </button>
          <motion.div
            initial="hidden" // الحالة الابتدائية
            animate={openSection === items.nameAccordin ? "visible" : "hidden"} // تحديد الحالة
            exit="exit" // عند الإغلاق
            variants={accordionAnimation} // الحركات المخصصة
            transition={{ duration: 0.3 }} // مدة الانتقال
            style={{ overflow: "hidden" }} // لمنع تجاوز المحتوى
          >
            {openSection === items.nameAccordin && (
              <div className="p-2 text-sm text-gray-700">
                {items.section}
              </div>
            )}
          </motion.div>
        </div>
      ))}
    </div>
           {/*================= end Accordions =============== */}
        </motion.div>

        <motion.div 
         className="relative lg:ml-16 order-1 py-5"
         variants={animationVariants} 
         custom="left" 
         initial="hidden"
         whileInView="visible"      
         transition={{ duration: 0.8 }}   
         viewport={{ once: true, amount: 0.2 }} 
         >
            <img src="./abd.jpg" alt="" className="w-[500px] h-[600px] object-contain" />
        </motion.div>
        
      </motion.div>
    </div>
    </AnimatePresence>
  );
};

export default AboutSection;
