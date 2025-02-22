
import { photos, Photos1, Photos2, videoProjects, videoProjects2 } from '../constant';
import 'swiper/swiper-bundle.css';
import VideoGallery from '../components/VideoGallery';
import PhotosSection from '../components/PhotosSection';


const Portfolio = () => {


  return (
    <div className="px-8 w-full  ">
      <div className=" text-center py-16 mb-10 ">
        <h1 className="text-4xl max-md:text-2xl text-Black font-Montserrat font-extrabold py-2">Showcasing My <span className="text-Yellow">Creations</span></h1>
        <p className="font-normal max-md:text-sm">Our works span a spectrum of projects, from mesmerizing films to impactful commercials, each a testament to our commitment to visual <br/> storytelling. Join us on this visual journey, where every frame tells a unique tale.</p>
      </div>
      <div className="my-5">
        <h1 className=" text-Black font-Montserrat font-extrabold text-3xl max-md:text-xl py-5  ">Short and Reels</h1>
        <VideoGallery videos={videoProjects} heightVideo='h-[600px]' slidesPerView={[1,2,3,4]}/>
      </div>
      <div className="my-5">
        <h1 className=" text-Black font-Montserrat font-extrabold text-3xl max-md:text-xl py-5  "> Video</h1>
        <VideoGallery videos={videoProjects2} heightVideo='h-[300px]' slidesPerView={[1,1,2,3]}/>
      </div>
      <div className="my-5">
        <h1 className=" text-Black font-Montserrat font-extrabold text-3xl max-md:text-xl py-5  "> photos</h1>
        <PhotosSection photos={Photos2} heightPhotos='h-[600px]' slidesPerView={[1,2,3,4]}/>
      </div>
      <div className="my-5">
        <h1 className=" text-Black font-Montserrat font-extrabold text-3xl max-md:text-xl py-5  "> photos</h1>
        <PhotosSection photos={Photos1} heightPhotos='h-[300px]' slidesPerView={[1,1,2,3]}/>
      </div>

    </div>
  )
}

export default Portfolio