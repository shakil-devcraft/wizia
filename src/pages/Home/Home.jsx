
import Allocate from "./Allocate";
import GetStarted from "./GetStarted";
import Leads from "./Leads";
import Service from "./Service";
import TestimonialSlider from "./TestimonialSlides";
import Train from "./Train";
import Trusted from "./Trusted";

const Home = () => {
    return (
        <section>
            <Leads />
            <Trusted />
            <Service />
            <Train />
            <TestimonialSlider />
            <Allocate />
            <GetStarted />
        </section>
    );
};

export default Home;