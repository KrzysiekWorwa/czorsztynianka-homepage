import { useState } from "react";
import { Burger, MobileMenu, Navbar, NavItem, NavLinks, NavLogo, NavWrapper } from "./styled";
import Logo from "./logo_CMYK_kolor.png"
import { Link } from "react-scroll";

const NavigationBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Navbar>
            <NavWrapper>
                <Link to="home" smooth={true} duration={600} offset={-90}>
                    <NavLogo src={Logo} alt="Logo" />
                </Link>

                <Burger onClick={() => setIsOpen(!isOpen)}>
                    <div />
                    <div />
                    <div />

                </Burger>

                <NavLinks>
                    <NavItem to="usługi" smooth={true} duration={600} offset={-90}>
                        Oferta
                    </NavItem>
                    <NavItem to="cennik-rejsu" smooth={true} duration={800} offset={-90}>
                        Cennik rejsów
                    </NavItem>
                    <NavItem to="cennik-wypozyczalni" smooth={true} duration={1200} offset={-90}>
                        Cennik wypożyczalni
                    </NavItem>
                    <NavItem to="address" smooth={true} duration={1400} offset={-90}>
                        Dojazd i kontakt
                    </NavItem>
                    <NavItem to="partners" smooth={true} duration={1600} offset={-90}>
                        Partnerzy
                    </NavItem>
                </NavLinks>

                <MobileMenu $open={isOpen}>
                    <NavItem to="usługi" smooth={true} duration={600} offset={-250}>
                        Oferta
                    </NavItem>
                    <NavItem to="cennik-rejsu" smooth={true} duration={800} offset={-250}>
                        Cennik rejsów
                    </NavItem>
                    <NavItem to="cennik-wypozyczalni" smooth={true} duration={1200} offset={-250}>
                        Cennik wypożyczalni
                    </NavItem>
                    <NavItem to="address" smooth={true} duration={1400} offset={-250}>
                        Dojazd i kontakt
                    </NavItem>
                    <NavItem to="partners" smooth={true} duration={1600} offset={-250}>
                        Partnerzy
                    </NavItem>
                </MobileMenu>
            </NavWrapper>
        </Navbar>
    );
};

export default NavigationBar;