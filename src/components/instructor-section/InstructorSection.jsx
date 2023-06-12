import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../section-title/SectionTitle";
import "swiper/css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const InstructorSection = () => {
  const { data: instructors = [] } = useQuery(["instructors"], async () => {
    const response = await axios.get(
      "https://summer-camp-backend.vercel.app/users/role/instructor"
    );
    return response.data;
  });

  return (
    <>
      <SectionTitle heading="The Best of the best Instructor"></SectionTitle>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {instructors.map((instructor) => (
          <SwiperSlide key={instructor._id}>
            <img src={instructor.photoUrl} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default InstructorSection;
