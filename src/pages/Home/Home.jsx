
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
        </section>
    );
};

export default Home;