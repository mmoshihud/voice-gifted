import React from "react";
import SectionTitle from "../section-title/SectionTitle";
import Counter from "../counter/Counter";

const Achievements = () => {
  return (
    <>
      <SectionTitle heading="Our Achievements"></SectionTitle>
      <div className="flex items-center justify-center gap-36">
        <Counter
          number={1500}
          title="Happy Students"
          color="text-red-500"
        ></Counter>
        <Counter
          number={250}
          title="Registered Courses"
          color="text-blue-500"
        ></Counter>
        <Counter
          number={50}
          title="Music Award"
          color="text-green-500"
        ></Counter>
        <Counter
          number={100}
          title="Instructors"
          color="text-purple-500"
        ></Counter>
      </div>
    </>
  );
};

export default Achievements;
