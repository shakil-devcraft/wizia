import Button from "../../components/shared/Button/Button";
import Container from "../../components/shared/Container/Container";

const Leads = () => {
    return (
        <div className="py-[84px] bg-[url(/img/lead-bg.png)] bg-cover object-cover">
            <Container>
                <div className="text-center md:text-start">
                    <h3 className="mb-2 md:mb-0 text-2xl font-normal text-primary-color font-montserrat leading-[29px]">AI SDRs (aiDRs)</h3>
                    <h1 className="font-montserrat font-bold text-[40px] md:text-[64px] leading-[44px] md:leading-[78px] ">More <span className="font-medium italic">leads</span>, <br /> less <span className="font-medium italic">people</span>.</h1>
                    <p className=" text-base md:text-[20px] leading-[26px] text-white font-light font-worksans mt-3 mb-5 md:w-[460px]">Train an aiDR on your ICP and messaging matrix. Activate it on a patch. It will send personalized sequences to every target contact.</p>
                    
                    <div className="flex justify-center md:justify-start mx-auto">
                        <Button label="Sign Up for the Beta" rightIcon={<i className='bx bx-right-arrow-alt'></i>} className="py-[10px] px-4 font-worksans text-sm leading-4 font-medium text-[#002228] bg-primary-color rounded-full hover:text-white" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Leads;