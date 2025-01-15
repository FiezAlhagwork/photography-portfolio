import { motion } from "framer-motion";
// import { images } from "../constant";
import PhotoGallery from "./PhotoGallery";

const Gallery = () => {
  return (
    <div className="mx-9">
      <motion.div>
        <h2 className="text-3xl text-center font-libre text-Black ">
          Some of my latest shots
        </h2>
      </motion.div>

      {/* <div className="grid grid-cols-12  gap-5 p-4 mt-3  ">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${image.cols} ${image.rows} relative overflow-hidden rounded-lg shadow-lg   `}
          >
            <img
              src={image.src}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-fill transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div> */}
      <div className=" flex justify-center items-center">

        <PhotoGallery/>
      </div>
    </div>
  );
};

export default Gallery;
