import { useState } from "react";
import { Burger, MobileMenu, Navbar, NavItem, NavLinks, NavLogo, NavWrapper, FacebookIcon, InstagramIcon, NavIcons } from "./styled";
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
                    <NavItem to="home" smooth={true} duration={600} offset={-90}>
                        Home
                    </NavItem>
                    <NavItem to="usługi" smooth={true} duration={600} offset={-90}>
                        Oferta
                    </NavItem>
                    <NavItem to="rejsy-po-jeziorze" smooth={true} duration={800} offset={-90}>
                        Rejsy gondolami
                    </NavItem>
                    <NavItem to="domki" smooth={true} duration={1000} offset={-90}>
                        Noclegi
                    </NavItem>
                    <NavItem to="rowery" smooth={true} duration={1200} offset={-90}>
                        Wypożyczalnia rowerów
                    </NavItem>
                    <NavItem to="address" smooth={true} duration={1400} offset={-90}>
                        Dojazd i kontakt
                    </NavItem>
                    <NavItem to="partners" smooth={true} duration={1600} offset={-90}>
                        Partnerzy
                    </NavItem>
                </NavLinks>
                <NavIcons>
                    <a href="https://www.facebook.com/przystanczorsztynianka" target="_blank" title="Facebook" rel="noreferrer">
                        <FacebookIcon />
                    </a>
                    <a href="https://www.instagram.com/czorsztynianka/" target="_blank" title="Instagram" rel="noreferrer">
                        <InstagramIcon />
                    </a>
                </NavIcons>

                <MobileMenu $open={isOpen}>
                    <NavItem to="home" smooth={true} duration={600} offset={-50}>
                        Home
                    </NavItem>
                    <NavItem to="usługi" smooth={true} duration={600} offset={-310}>
                        Oferta
                    </NavItem>
                    <NavItem to="rejsy-po-jeziorze" smooth={true} duration={800} offset={-270}>
                        Rejsy gondolami
                    </NavItem>
                    <NavItem to="domki" smooth={true} duration={1000} offset={-270}>
                        Noclegi
                    </NavItem>
                    <NavItem to="rowery" smooth={true} duration={1200} offset={-270}>
                        Wypożyczalnia rowerów
                    </NavItem>
                    <NavItem to="address" smooth={true} duration={1400} offset={-320}>
                        Dojazd i kontakt
                    </NavItem>
                    <NavItem to="partners" smooth={true} duration={1600} offset={-350}>
                        Partnerzy
                    </NavItem>
                </MobileMenu>
            </NavWrapper>
        </Navbar>
    );
};

export default NavigationBar;