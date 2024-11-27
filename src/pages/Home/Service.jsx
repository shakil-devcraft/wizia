import { serviceInfo } from "../../api";
import Container from "../../components/shared/Container/Container";

const Service = () => {
    return (
        <section>
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-6 py-[84px]">
                    {
                        serviceInfo?.map(({serviceImg, title, description}, idx) => (
                            <div key={idx} className="md:w-[33%] lg:w-[360px] xl:w-[384px] flex flex-col justify-between gap-4">
                                <div>
                                    <img src={serviceImg} alt="" />
                                </div>
                                <h2 className="text-xl md:text-2xl lg:text-[28px] font-semibold font-montserrat">{title}</h2>
                                <p className="font-worksans text-base lg:text-xl xl:text-[22px] font-light">{description}</p>
                            </div>
                        ))
                    }
                </div>
            </Container>
        </section>
    );
};

export default Service;