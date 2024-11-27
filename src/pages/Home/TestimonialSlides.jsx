
// import { useState } from "react";

import Container from "../../components/shared/Container/Container";

// const testimonials = [
//     {
//       quote: "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
//       name: "John Doe",
//       position: "Chief Strategy Officer @ Company",
//     },
//     {
//       quote: "Another testimonial content goes here. You can replace it with real feedback from your clients.",
//       name: "Jane Smith",
//       position: "Marketing Manager @ Business",
//     },
//     {
//       quote: "This is a great component for showcasing testimonials in a clean and modern way.",
//       name: "Alex Johnson",
//       position: "Developer @ TechCorp",
//     },
// ];

const TestimonialSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
//     );
//   };

  return (
    <section>
        <Container>
            <div className="flex justify-between items-center text-center gap-6">
                {/* left icon */}
                <div>
                    <div className="size-10 bg-white/60 flex justify-center items-center text-center rounded-full">
                        <i className='bx bx-left-arrow-alt text-3xl' ></i>
                    </div>
                </div>
                {/* content */}
                <div>
                    <img className="mx-auto" src="/img/qoute.png" alt="" />
                    <p>Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                    <span>John Doe</span>
                    <p>Chief Strategy Officer @ Company</p>
                    <p></p>

                    <div className="flex justify-center items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-yellow-300 text-white block"></span>
                    </div>
                </div>

                {/* right icon */}
                <div>
                    <div className="size-10 bg-white/60 flex justify-center items-center text-center rounded-full">
                        <i className='bx bx-right-arrow-alt text-3xl' ></i>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  );
};

export default TestimonialSlider;
