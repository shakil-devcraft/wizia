import { NavLink } from "react-router-dom";
import { navLinks } from "../../api";
import { useState } from "react";
import SmallNavbar from "./SmallNavbar";
import Container from "../shared/Container/Container";
import Button from "../shared/Button/Button";

const Navbar = () => {
    const [menu, setMenu] = useState(false);

   
    // change menu open and close
    const openMenu = () => {
        setMenu(!menu);
    };

    return (
        <section className="bg-b-secondary">
            <div>
                <Container>
                    <nav className="flex justify-between items-center py-4 md:py-5 lg:py-6">
                        {/* logo */}
                        <NavLink to="/">
                            <div>
                                <img className="w-24 md:w-[110px] lg:w-[131px]" src="/img/logoicon.png" alt="" />
                            </div>
                        </NavLink>
                        {/* menu */}
                        <ul className="hidden md:flex justify-between items-center md:gap-3 lg:gap-5">
                            {
                                navLinks?.map(({item, link}, idx) => (
                                    <li key={idx} className="font-worksans text-white hover:text-white/80 font-normal text-xs lg:text-sm leading-[17.85px]"><NavLink
                                    to={link}
                                    className={({ isActive, isPending }) =>
                                      isPending ? "pending" : isActive ? "active text-t-primary relative before:w-full before:h-[3px] before:bg-[#09090B] before:absolute before:-bottom-[37px] before:rounded-full" : "text-t-secondary"
                                    }
                                  >
                                    {item}
                                  </NavLink></li>
                                ))
                            }
                        </ul>
                        {/* user profile */}
                        <div className="flex justify-between items-center gap-2">
                            <div className="hidden md:flex justify-between items-center gap-3 md:gap-2">
                                <Button label="Book a Demo" className="py-[10px] px-4 font-worksans text-sm leading-4 font-medium text-[#002228] bg-primary-color rounded-full hover:text-white" />
                                <Button label="Contact Us" className="py-[10px] px-4 font-worksans text-sm leading-4 font-medium text-white border-2 hover:text-white/80 hover:border-white/80 border-white bg-transparent rounded-full" />
                            </div>
                            <div className="block md:hidden">
                                <button className="flex items-center" onClick={openMenu}>{menu ? <i className='bx bx-x text-[35px]' ></i> : <i className='bx bx-menu text-[35px]' ></i>}</button>
                            </div>
                        </div>
                    </nav>

                    {
                        menu ? <SmallNavbar openMenu={openMenu} /> : ""
                    }

                </Container>
            </div>
            <hr />
        </section>
    );
};

export default Navbar;