
import { useEffect, useState } from "react";
import Container from "../../components/shared/Container/Container";
import { testimonials } from "../../api";


const TestimonialSlider = () => {

    // access data
    const testData = testimonials;

    // index count
    const [currentIndex, setCurrentIndex] = useState(0);

    // prev button function
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? testimonials?.length -1 : prevIndex - 1
        );
    };

    // next button function
    const handleNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === testimonials?.length - 1 ? 0 : prevIndex + 1
        );
    };

    // autoplay codes
    const autoplayInterval = 5000; // 5 seconds

    // useEffect call
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, autoplayInterval);

        return () => clearInterval(interval);
    }, [currentIndex]);


    // data structure
    const {quote, name, position} = testData[currentIndex];


    return (
        <section>
            <Container>
                <div className="flex justify-between items-center text-center gap-6 py-[84px]">
                    {/* left icon */}
                    <div className="hidden md:flex">
                        <button onClick={() => handlePrev()} className="size-10 slide_btn bg-[#96ACAF33]/20 flex justify-center items-center text-center rounded-lg">
                            <i className='bx bx-left-arrow-alt text-2xl text-primary-color/50 hover:shadow-lg'></i>
                        </button>
                    </div>
                    {/* content */}
                    <div>
                        <img className="mx-auto" src="/img/qoute.png" alt="" />
                        <p className="lg:py-9 py-6 font-light lg:text-3xl md:text-lg text-base font-worksans lg:w-[880px]">{quote}</p>
                        <span className="text-primary-color font-worksans font-semibold lg:text-2xl text-xl mb-1">{name}</span>
                        <p className="font-worksans font-normal lg:text-lg text-base">{position}</p>

                        <div className="flex justify-center items-center gap-4 lg:mt-10 mt-8">
                            {
                                testData?.map((item, idx) => (
                                    // currentIndex === idx ? <button key={idx} className="size-2 rounded-full bg-primary-color text-white block"></button> : <button key={idx} className="size-2 rounded-full bg-[#394648] text-white block"></button>
                                    <button key={idx} onClick={() => setCurrentIndex(idx)} className={`size-2 rounded-full transition duration-150 ${currentIndex === idx ? "bg-primary-color" : "bg-[#394648]"}  text-white block`}></button>
                                ))
                            }
                        </div>
                    </div>

                    {/* right icon */}
                    <div className="hidden md:flex">
                        <button onClick={() => handleNext()} className="size-10 slide_btn bg-[#96ACAF33]/20 flex justify-center items-center text-center rounded-lg">
                            <i className='bx bx-right-arrow-alt text-2xl text-primary-color/50 hover:shadow-lg'></i>
                        </button>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default TestimonialSlider;