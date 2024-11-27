import { trainInfo } from "../../api";

const Train = () => {
    return (
        <section>
            <div className="lg:mx-8 md:mx-5 mx-3 px-4 lg:px-0 rounded-3xl py-[84px] bg-[url(/img/bg-train.png)] bg-cover object-cover">
                <div className="lg:ml-[540px]">
                    <h1 className="font-montserrat font-semibold lg:text-[40px] md:text-[36px] text-3xl text-white mb-2">Train your aiDR on your...</h1>
                    <h2 className="font-montserrat font-medium lg:text-[40px] md:text-[36px] text-3xl text-primary-color lg:mb-10 md:mb-8 mb-6 italic">prefered email st|</h2>
                    <p className="font-light font-worksans lg:text-2xl md:text-xl text-base lg:w-[450px] lg:mb-[60px] mb-10">You’re in control. Train your aiDR on elements of your Marketing strategy.</p>

                    <div className="flex flex-wrap justify-start items-center gap-4 lg:w-[430px] md:w-[430px]">
                        {
                            trainInfo?.map(({trainIcon, trainText}, idx) => (
                                <div key={idx} className="flex justify-start items-center gap-2 text-secondary-color">
                                    <i className={`${trainIcon} flex justify-center items-center`}></i>
                                    <p>{trainText}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Train;