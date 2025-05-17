import { Navbar, NavItem, NavLinks, NavLogo, NavWrapper } from "./styled";
import Logo from "./logo_CMYK_kolor.png"

const NavigationBar = () => (
    <Navbar>
        <NavWrapper>
            <NavLogo src={Logo} alt="Logo" />
            <NavLinks>
                <NavItem to="usługi" smooth={true} duration={600} offset={-60}>
                    Oferta
                </NavItem>
                <NavItem to="cennik-rejsu" smooth={true} duration={800} offset={-60}>
                    Cennik rejsów
                </NavItem>
                <NavItem to="cennik-wypozyczalni" smooth={true} duration={1200} offset={-60}>
                    Cennik wypożyczalni
                </NavItem>

            </NavLinks>
        </NavWrapper>
    </Navbar>
);

export default NavigationBar;