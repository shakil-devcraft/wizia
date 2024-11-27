
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
            <div className="flex justify-between items-center text-center gap-6 py-[84px]">
                {/* left icon */}
                <div className="hidden md:flex">
                    <div className="size-10 bg-[#96ACAF33]/20 flex justify-center items-center text-center rounded-lg">
                        <i className='bx bx-left-arrow-alt text-2xl text-primary-color' ></i>
                    </div>
                </div>
                {/* content */}
                <div>
                    <img className="mx-auto" src="/img/qoute.png" alt="" />
                    <p className="lg:py-9 py-6 font-light lg:text-3xl md:text-lg text-base font-worksans lg:w-[880px]">Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                    <span className="text-primary-color font-worksans font-semibold lg:text-2xl text-xl mb-1">John Doe</span>
                    <p className="font-worksans font-normal lg:text-lg text-base">Chief Strategy Officer @ Company</p>

                    <div className="flex justify-center items-center gap-2 lg:mt-10 mt-8">
                        <span className="size-2 rounded-full bg-primary-color text-white block"></span>
                    </div>
                </div>

                {/* right icon */}
                <div className="hidden md:flex">
                    <div className="size-10 bg-[#96ACAF33]/20 flex justify-center items-center text-center rounded-lg">
                        <i className='bx bx-right-arrow-alt text-2xl text-primary-color' ></i>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  );
};

export default TestimonialSlider;
