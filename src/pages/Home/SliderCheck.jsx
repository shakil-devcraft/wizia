import { useState, useEffect } from "react";
import Container from "../../components/shared/Container/Container";
import { testimonials } from "../../api";

const TestimonialSlider = () => {
  // Access data
  const testData = testimonials;

  // Index count
  const [currentIndex, setCurrentIndex] = useState(0);

  // Interval time for autoplay
  const autoplayInterval = 2000; // 2 seconds

  // Prev button function
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials?.length - 1 : prevIndex - 1
    );
  };

  // Next button function
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials?.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Autoplay feature
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, autoplayInterval);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Data structure
  const { quote, name, position } = testData[currentIndex];

  return (
    <section>
      <Container>
        <div className="flex justify-between items-center text-center gap-6 py-[84px]">
          {/* Left icon */}
          <div className="hidden md:flex">
            <button
              onClick={handlePrev}
              className="size-10 slide_btn bg-[#96ACAF33]/20 flex justify-center items-center text-center rounded-lg"
            >
              <i className="bx bx-left-arrow-alt text-2xl text-primary-color/50 hover:shadow-lg"></i>
            </button>
          </div>

          {/* Content */}
          <div>
            <img className="mx-auto" src="/img/qoute.png" alt="" />
            <p className="lg:py-9 py-6 font-light lg:text-3xl md:text-lg text-base font-worksans lg:w-[880px]">
              {quote}
            </p>
            <span className="text-primary-color font-worksans font-semibold lg:text-2xl text-xl mb-1">
              {name}
            </span>
            <p className="font-worksans font-normal lg:text-lg text-base">
              {position}
            </p>

            {/* Pagination Dots */}
            <div className="flex justify-center items-center gap-4 lg:mt-10 mt-8">
              {testData?.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)} // Set index on click
                  className={`size-2 rounded-full transition duration-150 ${
                    currentIndex === idx
                      ? "bg-primary-color"
                      : "bg-[#394648]"
                  } text-white block`}
                ></button>
              ))}
            </div>
          </div>

          {/* Right icon */}
          <div className="hidden md:flex">
            <button
              onClick={handleNext}
              className="size-10 slide_btn bg-[#96ACAF33]/20 flex justify-center items-center text-center rounded-lg"
            >
              <i className="bx bx-right-arrow-alt text-2xl text-primary-color/50 hover:shadow-lg"></i>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialSlider;
