import { allocateInfo } from "../../api";

const Allocate = () => {
    return (
        <section>
            <div className="lg:mx-8 md:mx-5 mx-3 px-4 lg:px-0 rounded-3xl py-[84px] bg-[url(/img/bg-allocate.png)] bg-cover object-cover">
                <div className="lg:px-20 md:px-10 px-4">
                    <h1 className="font-montserrat font-semibold lg:text-[32px] md:text-2xl text-xl text-white mb-2 lg:w-[591px] lg:leading-10">Allocate effort where your reps make an inpact.</h1>
                    <h2 className="font-montserrat font-medium lg:text-[32px] md:text-2xl text-xl text-primary-color lg:mb-10 md:mb-8 mb-6 italic">prefered email st|</h2>
                    <p className="font-light font-worksans lg:text-xl md:text-lg text-base md:w-[550px] lg:w-[600px] lg:mb-[60px] mb-10">Keep your reps “in the air” -- out in the field and on the phone where they can build relationships.</p>

                    <div className="flex flex-wrap justify-start items-center md:gap-4 gap-8 lg:w-[597px]">
                        {
                            allocateInfo?.map(({percent, description}, idx) => (
                                <div key={idx}>
                                    <h1 className="lg:text-[40px] text-4xl font-bold font-montserrat text-primary-color mb-3">{percent}</h1>
                                    <p className="md:w-[170px] lg:w-[185px] lg:text-xl md:text-lg text-base">{description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Allocate;