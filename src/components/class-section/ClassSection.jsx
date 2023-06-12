import { Swiper, SwiperSlide } from "swiper/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SectionTitle from "../section-title/SectionTitle";
import "swiper/css";

const ClassSection = () => {
  const { data: classes = [] } = useQuery(["classes"], async () => {
    const response = await axios.get(
      "https://summer-camp-backend.vercel.app/all-classes"
    );
    return response.data;
  });
  return (
    <>
      <SectionTitle heading="Top Most Popular Section"></SectionTitle>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {classes.map((classImage) => (
          <SwiperSlide key={classImage._id}>
            <img src={classImage.image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ClassSection;
