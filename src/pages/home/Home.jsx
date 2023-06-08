import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  return (
    <>
      <Carousel>
        <div>
          <img src="https://img.freepik.com/free-vector/instagram-carousel-templates_52683-51653.jpg" />
        </div>
        <div>
          <img src="https://img.freepik.com/free-vector/instagram-carousel-templates_52683-51653.jpg" />
        </div>
        <div>
          <img src="https://img.freepik.com/free-vector/instagram-carousel-templates_52683-51653.jpg" />
        </div>
      </Carousel>
    </>
  );
};

export default Home;
