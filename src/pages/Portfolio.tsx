import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { videoProjects } from '../constant';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation'
import 'swiper/swiper-bundle.css';
import { useState } from 'react';


const Portfolio = () => {

  const [activeVideo, setActiveVideo] = useState<null | number>(null);

  const handleVideoClick = (id:number) => {
    setActiveVideo(id);
  };

  return (
    <div className="px-8 w-full  ">
      <div className=" text-center py-16 mb-10 ">
        <h1 className="text-4xl max-md:text-2xl text-Black font-Montserrat font-extrabold py-2">Showcasing My <span className="text-Yellow">Creations</span></h1>
        <p className="font-normal max-md:text-sm">Our works span a spectrum of projects, from mesmerizing films to impactful commercials, each a testament to our commitment to visual <br/> storytelling. Join us on this visual journey, where every frame tells a unique tale.</p>
      </div>
      <div className="my-5">
        <h1 className=" text-Black font-Montserrat font-extrabold text-3xl max-md:text-xl py-5  ">Short and Reels</h1>
        <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{ clickable: true }}
        navigation
        modules={[Pagination, Navigation]}
        className="w-full h-[600px] "
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 }
        }}
      >
        {videoProjects.map((video) => (
          <SwiperSlide key={video.id}>
           <div className="w-full h-full relative cursor-pointer  " onClick={() => handleVideoClick(video.id)}>
              {activeVideo === video.id ? (
                <video
                  src={video.videoUrl}
                  controls
                  autoPlay
                  className="w-[400px] h-full object-cover rounded-lg"
                  preload="metadata"
                ></video>
              ) : (
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              )}
              <p className="text-white text-center mt-2">{video.title}</p>
            </div>  
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  )
}

export default Portfolio