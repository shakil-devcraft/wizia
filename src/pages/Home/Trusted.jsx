import { Link } from "react-router-dom";
import { companyLogos } from "../../api";
import Container from "../../components/shared/Container/Container";

const Trusted = () => {
    return (
        <section className="bg-footer-bg w-full py-6">
            <Container>
                <div>
                    <h4 className="text-center font-montserrat font-normal text-base text-primary-color uppercase">our trusted partners</h4>
                    {/* company logo */}
                    <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
                        {
                            companyLogos?.map(({img, link}, idx) => (
                                <Link key={idx} to={link}>
                                    <img src={img} alt="" />
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Trusted;