import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Helmet } from "react-helmet-async";
import ClassSection from "../../components/class-section/ClassSection";
import InstructorSection from "../../components/instructor-section/InstructorSection";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Voice Gifted - A Music Instrument Learning School</title>
      </Helmet>
      <Carousel>
        <div>
          <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745" />
        </div>
        <div>
          <img src="https://plus.unsplash.com/premium_photo-1682175064808-f7b3ec2b39df" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1499415479124-43c32433a620" />
        </div>
      </Carousel>
      <div className="container mx-auto">
        <ClassSection />
        <InstructorSection />
      </div>
    </>
  );
};

export default Home;
