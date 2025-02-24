import AboutSection from "../components/AboutSection"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Gallery from "../components/Gallery"
import Hero from "../components/Hero"
import ScrollToTop from "../components/ScrollToTop"
import Services from "../components/Services"
import Testimonial from "../components/Testimonial"



const Home = () => {
  return (
    <>
        <Hero/>
        <AboutSection/>
        <Gallery/>
        <Services/>
        <Testimonial/>
        <Contact/>
        <Footer/>
        <ScrollToTop/>
    </>
  )
}

export default Home