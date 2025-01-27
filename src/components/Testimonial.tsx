import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

const testimonials = [
  {
    text: "Oliver's unique eye for urban landscapes has brought our campaign to life. His ability to capture the soul of the city is unparalleled.",
    author: "Emily Clark",
    role: "Marketing Director - Cityscape Magazine",
  },
  {
    text: "I hired Oliver for a personal photoshoot, and he exceeded all expectations. His work is not just photography; it's storytelling at its finest.",
    author: "Liam Thompson",
    role: "Entrepreneur",
  },
  {
    text: "Oliver's workshop opened my eyes to the beauty of urban photography. His guidance and techniques were invaluable. A true master of his craft!",
    author: "Sarah Jenkins",
    role: "Aspiring Photographer",
  },
];

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
            <div className="p-6 border-2 border-black bg-White shadow-lg min-h-52 ">
              <p className="text-Black font-libre text-base ">"{item.text}"</p>
              <p className="font-bold mt-4">{item.author},</p>
              <p className="text-sm text-gray-500">{item.role}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Testimonial;
