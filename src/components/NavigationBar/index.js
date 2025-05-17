import { Navbar, NavItem, NavLinks, NavLogo, NavWrapper } from "./styled";
import Logo from "./logo_CMYK_kolor.png"
import { Link } from "react-scroll";

const NavigationBar = () => (
    <Navbar>
        <NavWrapper>
            <Link to="home" smooth={true} duration={600} offset={-90}>
                <NavLogo src={Logo} alt="Logo" />
            </Link>
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

            </NavLinks>
        </NavWrapper>
    </Navbar>
);

export default NavigationBar;