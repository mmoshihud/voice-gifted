import React from "react";
import SectionTitle from "../section-title/SectionTitle";

const Services = () => {
  return (
    <>
      <SectionTitle heading="Our Services"></SectionTitle>
      <div className="flex justify-center gap-10">
        <div className="w-1/5">
          <img
            className="mb-4 h-60 w-full object-cover"
            src="https://img.freepik.com/free-vector/world-music-day-gradient-background_23-2149397900.jpg"
            alt="Instrumental"
          />
          <h1 className="mb-4 text-xl font-bold">Instrumental Courses</h1>
          <p className="text-lg">
            Explore the world of instruments with our diverse range of
            instrumental courses.
          </p>
        </div>
        <div className="w-1/5">
          <img
            className="mb-4 h-60 w-full object-cover"
            src="https://img.freepik.com/free-photo/string-instruments-close-up-musical-concert-generative-ai_169016-28900.jpg"
            alt="Music Theory"
          />
          <h1 className="mb-4 text-xl font-bold">Music Theory</h1>
          <p className="text-lg">
            Unlock the secrets behind the music with our theory and composition
            courses.
          </p>
        </div>
        <div className="w-1/5">
          <img
            className="mb-4 h-60 w-full object-cover"
            src="https://img.freepik.com/free-photo/microphone-dark_144627-34834.jpg"
            alt="Vocal Performances"
          />
          <h1 className="mb-4 text-xl font-bold">Vocal Performances</h1>
          <p className="text-lg">
            Discover the power of your voice with our vocal performance courses.
          </p>
        </div>
        <div className="w-1/5">
          <img
            className="mb-4 h-60 w-full object-cover"
            src="https://img.freepik.com/free-photo/sound-mixer-studio_107420-64845.jpg"
            alt="Music Production"
          />
          <h1 className="mb-4 text-xl font-bold">Music Production</h1>
          <p className="text-lg">
            Step into the modern age of music with our production and technology
            courses.
          </p>
        </div>
      </div>
    </>
  );
};

export default Services;
