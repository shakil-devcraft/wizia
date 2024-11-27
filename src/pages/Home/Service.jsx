import { serviceInfo } from "../../api";
import Container from "../../components/shared/Container/Container";

const Service = () => {
    return (
        <section>
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {
                        serviceInfo?.map(({serviceImg, title, description}, idx) => (
                            <div key={idx} className="md:w-[33%] lg:w-[384px]">
                                <img src={serviceImg} alt="" />
                                <div>
                                    <h2>{title}</h2>
                                    <p>{description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </Container>
        </section>
    );
};

export default Service;