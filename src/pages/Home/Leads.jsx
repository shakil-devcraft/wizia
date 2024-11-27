import Button from "../../components/shared/Button/Button";
import Container from "../../components/shared/Container/Container";

const Leads = () => {
    return (
        <div className="bg-[url(img/dora_wrap.png)] bg-cover object-cover h-full">
            <Container>
                <div className="space-y-6">
                    <h3>AI SDRs (aiDRs)</h3>
                    <h1>More <span>leads</span>, less <span>people</span>.</h1>
                    <p>Train an aiDR on your ICP and messaging matrix. Activate it on a patch. It will send personalized sequences to every target contact.</p>
                    <Button label="Sign Up for the Beta" rightIcon={<i className='bx bx-right-arrow-alt'></i>} className="py-[10px] px-4 font-worksans text-sm leading-4 font-medium text-[#002228] bg-primary-color rounded-full hover:text-white" />
                </div>
            </Container>
        </div>
    );
};

export default Leads;