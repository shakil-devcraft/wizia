
// const TestimonialSlides = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default TestimonialSlides;



import { useState } from "react";

const testimonials = [
  {
    quote: "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    name: "John Doe",
    position: "Chief Strategy Officer @ Company",
  },
  {
    quote: "Another testimonial content goes here. You can replace it with real feedback from your clients.",
    name: "Jane Smith",
    position: "Marketing Manager @ Business",
  },
  {
    quote: "This is a great component for showcasing testimonials in a clean and modern way.",
    name: "Alex Johnson",
    position: "Developer @ TechCorp",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-gray-900 text-white p-8 rounded-lg flex flex-col items-center justify-center relative">
      {/* Quote Icon */}
      <div className="text-teal-400 text-4xl mb-4">
        <img src="" alt="" />
      </div>

      {/* Testimonial Content */}
      <p className="text-lg text-center max-w-3xl mb-6">{testimonials[currentIndex].quote}</p>
      <div className="text-center">
        <h3 className="text-teal-400 font-semibold text-lg">{testimonials[currentIndex].name}</h3>
        <p className="text-gray-400">{testimonials[currentIndex].position}</p>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center w-full max-w-lg mt-8">
        <button
          onClick={handlePrev}
          className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full focus:outline-none"
        >
          <span>&larr;</span>
        </button>
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-teal-400" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
        <button
          onClick={handleNext}
          className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full focus:outline-none"
        >
          <span>&rarr;</span>
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
