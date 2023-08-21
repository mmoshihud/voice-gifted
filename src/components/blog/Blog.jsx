import { FaEye, FaComment, FaArrowRight } from "react-icons/fa";
import SectionTitle from "../section-title/SectionTitle";

const Blog = () => {
  return (
    <>
      <SectionTitle heading="From The blog" />
      <div className="flex flex-wrap">
        <div className="p-4 md:w-1/3">
          <div className="h-full rounded-lg border-2 border-gray-200 border-opacity-50">
            <img
              className="h-60 w-full object-cover"
              src="https://images.unsplash.com/photo-1619983081563-430f63602796"
              alt="blog"
              style={{ height: "300px" }}
            />
            <div className="p-6">
              <h1 className="mb-3 text-lg font-medium text-gray-900">
                Rev Up Your Collection
              </h1>
              <p className="mb-3 leading-relaxed">
                Exploring the Top 10 Toy Cars of 2023" - Get a glimpse of the
                latest and greatest toy cars for collectors.
              </p>
              <div className="flex flex-wrap items-center">
                <a className="inline-flex items-center text-secondary">
                  Learn More
                  <span className="ml-2">
                    <FaArrowRight />
                  </span>
                </a>
                <span className="ml-auto mr-3 inline-flex items-center border-r-2 border-gray-200 py-1 pr-3 text-sm leading-none text-gray-400">
                  <span className="mr-2">
                    <FaEye />
                  </span>
                  19.99k
                </span>
                <span className="inline-flex items-center text-sm leading-none text-gray-400">
                  <span className="mr-2">
                    <FaComment />
                  </span>
                  5
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 md:w-1/3">
          <div className="h-full rounded-lg border-2 border-gray-200 border-opacity-50">
            <img
              className="h-48 w-full object-cover"
              src="https://images.unsplash.com/photo-1511379938547-c1f69419868d"
              alt="blog"
              style={{ height: "300px" }}
            />
            <div className="p-6">
              <h1 className="mb-3 text-lg font-medium text-gray-900">
                Unleash Your Inner Speedster
              </h1>
              <p className="mb-3 leading-relaxed">
                The Ultimate Guide to Toy Car Racing" - Dive into the thrilling
                world of toy car racing and discover tips to enhance your racing
                experience
              </p>
              <div className="flex flex-wrap items-center">
                <a className="inline-flex items-center text-secondary">
                  Learn More
                  <span className="ml-2">
                    <FaArrowRight />
                  </span>
                </a>
                <span className="ml-auto mr-3 inline-flex items-center border-r-2 border-gray-200 py-1 pr-3 text-sm leading-none text-gray-400">
                  <span className="mr-2">
                    <FaEye />
                  </span>
                  100k
                </span>
                <span className="inline-flex items-center text-sm leading-none text-gray-400">
                  <span className="mr-2">
                    <FaComment />
                  </span>
                  14
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 md:w-1/3">
          <div className="h-full rounded-lg border-2 border-gray-200 border-opacity-50">
            <img
              className="h-48 w-full object-cover"
              src="https://images.unsplash.com/photo-1506157786151-b8491531f063"
              alt="blog"
              style={{ height: "300px" }}
            />
            <div className="p-6">
              <h1 className="mb-3 text-lg font-medium text-gray-900">
                From Classic to Modern
              </h1>
              <p className="mb-3 leading-relaxed">
                A Journey Through the Evolution of Toy Cars" - Take a nostalgic
                trip through time and explore the evolution of toy cars from
                vintage to contemporary models.
              </p>
              <div className="flex flex-wrap items-center">
                <a className="inline-flex items-center text-secondary">
                  Learn More
                  <span className="ml-2">
                    <FaArrowRight />
                  </span>
                </a>
                <span className="ml-auto mr-3 inline-flex items-center border-r-2 border-gray-200 py-1 pr-3 text-sm leading-none text-gray-400">
                  <span className="mr-2">
                    <FaEye />
                  </span>
                  99k
                </span>
                <span className="inline-flex items-center text-sm leading-none text-gray-400">
                  <span className="mr-2">
                    <FaComment />
                  </span>
                  92
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
