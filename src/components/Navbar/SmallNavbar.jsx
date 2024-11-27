import { NavLink } from "react-router-dom";
import { navLinks } from "../../api";
import PropTypes from 'prop-types'; 
import Container from "../shared/Container/Container";

const SmallNavbar = ({openMenu}) => {
    console.log(openMenu);

    return (
        <section className={`bg-bg-color fixed w-full h-screen top-0 left-0 mt-[68px] ${!openMenu && "hidden"}`}>
            <Container>
                <nav className="py-10">

                    {/* menu */}
                    <ul className="flex-col justify-center items-center space-y-5">
                        {
                            navLinks?.map(({item, link}, idx) => (
                                <li onClick={openMenu} key={idx} className="text-t-secondary font-bold text-base leading-[17.85px]"><NavLink
                                to={link}
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active text-white" : "text-primary-color"
                                }
                                >
                                {item}
                                </NavLink></li>
                            ))
                        }
                    </ul>
                </nav>
            </Container>
        </section>
    );
};

SmallNavbar.propTypes = {
    openMenu: PropTypes.any,
};

export default SmallNavbar;