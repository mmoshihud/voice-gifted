import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Helmet } from "react-helmet-async";
import ClassSection from "../../components/class-section/ClassSection";
import InstructorSection from "../../components/instructor-section/InstructorSection";
import About from "../../components/about/About";
import Services from "../../components/services/Services";
import Achievements from "../../components/Achievements/Achievements";
import Blog from "../../components/blog/Blog";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Voice Gifted - A Music Instrument Learning School</title>
      </Helmet>
      <Carousel>
        <div style={{ height: "600px" }}>
          <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745" />
        </div>
        <div style={{ height: "600px" }}>
          <img src="https://plus.unsplash.com/premium_photo-1682175064808-f7b3ec2b39df" />
        </div>
        <div style={{ height: "600px" }}>
          <img src="https://images.unsplash.com/photo-1499415479124-43c32433a620" />
        </div>
      </Carousel>
      <div className="container mx-auto">
        <ClassSection />
        <InstructorSection />
        <Blog />
        <About />
        <Services />
        <Achievements />
      </div>
    </>
  );
};

export default Home;
