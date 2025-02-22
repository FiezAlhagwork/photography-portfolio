import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import  { useState } from 'react'
import { PhotosGalleryProps } from "../types";

const PhotosSection = ({  heightPhotos,
    photos,
    slidesPerView}:PhotosGalleryProps) => {
      const [loadedImages, setLoadedImages] = useState<{ [key: number]: boolean }>(
        {}
      );
    
  return (
    <Swiper
    slidesPerView={4}
    spaceBetween={20}
    pagination={{ clickable: true }}
    navigation
    modules={[Pagination, Navigation]}
    className={`w-full  ${heightPhotos} `}
    breakpoints={{
      320: { slidesPerView: slidesPerView[0] },
      640: { slidesPerView: slidesPerView[1] },
      1024: { slidesPerView: slidesPerView[2] },
      1280: { slidesPerView: slidesPerView[3] },
    }}
  >
    {photos.map((photo) => (
      <SwiperSlide key={photo.id}>
        <div
          className="w-full h-full relative cursor-pointer  "
        >
              {/* Skeleton Placeholder عند تحميل الصورة */}
              {!loadedImages[photo.id] && (
                <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-lg"></div>
              )}

              {/* الصورة المصغرة بعد تحميلها */}
              <img
                src={photo.src}
                alt={photo.alt}
                className={`w-full h-full object-cover rounded-lg transition-opacity ${
                  loadedImages[photo.id] ? "opacity-100" : "opacity-0"
                }`}
                loading="lazy"
                onLoad={() =>
                  setLoadedImages((prev) => ({ ...prev, [photo.id]: true }))
                }
              />
          {/* <p className="text-white text-center mt-2">{video.title}</p> */}
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
  )
}

export default PhotosSection