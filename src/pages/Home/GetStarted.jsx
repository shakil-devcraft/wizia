import Button from "../../components/shared/Button/Button";
import Container from "../../components/shared/Container/Container";

const GetStarted = () => {
    return (
        <section>
            <div className="py-[84px]">
                <Container>
                    <div className="text-center">
                        <h3 className="mb-2 md:mb-0 lg:mb-4 text-xl font-normal text-primary-color font-montserrat leading-[29px]">GET STARTED</h3>
                        <h1 className="font-montserrat font-bold text-3xl md:text-4xl"><span className="font-medium italic">Embrace </span> the new era of <span className="font-medium italic">outbound</span>.</h1>
                        <p className="mx-auto text-base md:text-[20px] leading-[26px] text-white font-light font-worksans mt-5 mb-5">Wizia lets you train, activate, and optimize aiDRs.
                        <br />
                        Take your outbound to new levels of performance and efficiency.</p>
                        
                        <div className="flex justify-center mx-auto">
                            <Button label="Sign Up for the Beta" rightIcon={<i className='bx bx-right-arrow-alt'></i>} className="py-[10px] px-4 font-worksans text-sm leading-4 font-medium text-[#002228] bg-primary-color rounded-full hover:text-white" />
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
};

export default GetStarted;