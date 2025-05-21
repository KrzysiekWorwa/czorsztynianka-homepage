import { FacebookIcon, FooterCopyright, FooterIcons, FooterLogo, FooterSection, FooterWrapper, HomeButton, InstagramIcon } from "./styled";
import Logo from "./logo_CMYK_biale.png"
import { ReactComponent as ArrowIcon } from "./arrow.svg";
import { Link } from "react-scroll";

const Footer = () => (
    <>

        <FooterSection>
            <Link to="home" smooth={true} duration={2000} offset={-90}>
                <HomeButton>
                    <ArrowIcon />
                </HomeButton>
            </Link>
            <FooterWrapper>
                <FooterLogo src={Logo} />
                <FooterIcons>
                    <a href="https://www.facebook.com/przystanczorsztynianka" target="_blank" title="Facebook" rel="noreferrer">
                        <FacebookIcon />
                    </a>
                    <a href="https://www.instagram.com/czorsztynianka/" target="_blank" title="Instagram" rel="noreferrer">
                        <InstagramIcon />
                    </a>
                </FooterIcons>
                <FooterCopyright>
                    Czorsztynianka<br />
                    © Copyright 2025
                </FooterCopyright>
            </FooterWrapper>
        </FooterSection>
    </>
);


export default Footer;