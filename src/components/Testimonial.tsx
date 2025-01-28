import { testimonials } from "../constant";
import { animationVariants } from "../utils";
import {motion} from "framer-motion"

const Testimonial = () => {
  return (
    <div className="py-16">
      <div className=" containers bg-White">
        <div className="flex justify-between items-center px-4">
          <div className="flex gap-3 items-center   ">
            <h2 className="font-libre text-2xl font-semibold">Testimonial</h2>
            <img src="./small.png" alt="" className="w-9  h-5" />
          </div>

          <div className="flex gap-2 items-center">
            <span className="w-3 h-3 border-2 border-black"></span>
            <span className="w-3 h-3 border-2 border-black bg-Yellow"></span>
            <span className="w-3 h-3 border-2 border-black"></span>
            <span className="w-3 h-3 border-2 border-black"></span>
          </div>
        </div>

        <div className=" py-10 px-5 flex max-lg:flex-col gap-4 items-center">
          {testimonials.map((item, index) => (
            <motion.div
              variants={animationVariants}
              custom="down"
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.2 }}
              key={index}
              className="p-6 border-2 border-black bg-White shadow-lg min-h-52 cursor-pointer   "
            >
              <p className="text-Black font-libre text-base cursor-pointer ">
                "{item.text}"
              </p>
              <p className="font-bold mt-4">{item.author},</p>
              <p className="text-sm text-gray-500">{item.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
