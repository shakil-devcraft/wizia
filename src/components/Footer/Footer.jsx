import Container from "../shared/Container/Container";

const Footer = () => {
    return (
        <section className="bg-footer-bg">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-center gap-5 py-10">
                    <img src="/img/logolight.png" alt="" />
                    <span className="text-[#96ACAF] font-light leading-[28px] text-base">Copyright © 2023 Wizia. All rights reserved.</span>
                </div>
            </Container>
        </section>
    );
};

export default Footer;