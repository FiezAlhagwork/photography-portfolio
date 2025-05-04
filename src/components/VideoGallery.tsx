import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { useState } from "react";
import { VideoGalleryProps } from "../types";

const VideoGallery = ({
  heightVideo,
  videos,
  slidesPerView,
}: VideoGalleryProps) => {
  const [activeVideo, setActiveVideo] = useState<null | number>(null);
  const [loadedImages, setLoadedImages] = useState<{ [key: number]: boolean }>(
    {}
  );

  const handleVideoClick = (id: number) => {
    setActiveVideo(id);
  };

  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={20}
      pagination={{ clickable: true }}
      navigation
      modules={[Pagination, Navigation]}
      className={`w-full  ${heightVideo} `}
      breakpoints={{
        320: { slidesPerView: slidesPerView[0] },
        640: { slidesPerView: slidesPerView[1] },
        1024: { slidesPerView: slidesPerView[2] },
        1280: { slidesPerView: slidesPerView[3] },
      }}
    >
      {videos.map((video) => (
        <SwiperSlide key={video.id}>
          <div
            className="w-full h-full relative cursor-pointer  "
            onClick={() => handleVideoClick(video.id)}
          >
            {activeVideo === video.id ? (
              <video
                src={video.videoUrl}
                controls
                autoPlay
                className="w-full h-full object-cover rounded-lg"
                preload="metadata"
              ></video>
            ):(
              <>
                {/* Skeleton Placeholder عند تحميل الصورة */}
                {!loadedImages[video.id] && (
                  <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-lg"></div>
                )}

                {/* الصورة المصغرة بعد تحميلها */}
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className={`w-full h-full object-cover rounded-lg transition-opacity ${
                    loadedImages[video.id] ? "opacity-100" : "opacity-0"
                  }`}
                  loading="lazy"
                  onLoad={() =>
                    setLoadedImages((prev) => ({ ...prev, [video.id]: true }))
                  }
                />
              </>
            )}
            <p className="text-white text-center mt-2">{video.title}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default VideoGallery;
