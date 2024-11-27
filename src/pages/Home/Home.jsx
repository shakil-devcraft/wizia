
import Allocate from "./Allocate";
import Leads from "./Leads";
import Service from "./Service";
import Train from "./Train";
import Trusted from "./Trusted";

const Home = () => {
    return (
        <section>
            <Leads />
            <Trusted />
            <Service />
            <Train />
            <Allocate />
        </section>
    );
};

export default Home;