import { motion } from "framer-motion";
import { services } from "../constant";

const Services = () => {
  return (
    <section className="py-16 my-16 bg-Smoke_White">
      <div className=" containers  px-6">
        <h2 className="text-3xl font-Montserrat font-bold text-Black text-center mb-10">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-White p-6 rounded-2xl shadow-lg flex flex-col items-center text-center transition-all hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: service.id * 0.1 }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-Montserrat font-semibold text-Black">{service.title}</h3>
              <p className="text-Grey mt-2">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services