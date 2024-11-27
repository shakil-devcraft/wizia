
import Navbar from '../../components/Navbar/Navbar';
import Container from '../../components/shared/Container/Container';

const Error = () => {
    return (
        <section className="bg-bg-color min-h-screen">
            <Navbar className="text-primary-color" />
            <div className="flex flex-col justify-center items-center text-center h-[calc(100vh-94px)]">
                <Container>
                    <div>
                        {/* error image */}
                        <img className="w-48 md:w-60 lg:w-[300px] mx-auto mb-5 rounded-full" src="/img/error-robot.jpg" alt="Error Robot" />
                        
                        {/* error message */}
                        <p className="text-white font-montserrat lg:text-base text-sm font-medium">
                            Oh no, something went wrong...
                        </p>
                    </div>
                </Container>
            </div>
        </section>
    );
};

export default Error;
