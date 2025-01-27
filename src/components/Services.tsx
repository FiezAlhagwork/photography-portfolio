import { motion } from "framer-motion";
import { services } from "../constant";

const Services = () => {
  return (
    <section className="py-16 my-16 mb  bg-Smoke_White">
      <div className=" containers  px-6">
        <h2 className="text-3xl text-center font-libre text-Black  mb-10">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className= "group bg-White p-6 rounded-2xl shadow-lg flex flex-col   transition-all hover:shadow-xl hover:bg-Yellow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: service.id * 0.1 }}
            >
              <div className="mb-4 w-16 h-16 bg-Yellow text-White group-hover:bg-White group-hover:text-Yellow rounded-full flex justify-center items-center">
                <div>{service.icon}</div>
              </div>
              <h3 className="text-xl py-4 font-Montserrat font-semibold text-Black group-hover:text-White">{service.title}</h3>
              <p className="text-gray-500 mt-2 group-hover:text-White">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services