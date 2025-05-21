import styled from "styled-components";
import { ReactComponent as FacebookIconLink } from "../SvgIcons/facebookIcon.svg";
import { ReactComponent as InstagramIconLink } from "../SvgIcons/instagramIcon.svg";
import { Link } from "react-scroll";

export const FooterSection = styled.footer`
    background: #93A981;
    padding: 40px;
    text-align: center;
    margin-top: 40px;

`;

export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    grid-gap: 24px;
`;

export const FooterLogo = styled.img`
    height: auto;
    width: 90px;

`;

export const FooterIcons = styled.div`
    display: flex;
    gap: 24px;

    @media (max-width: 767px) {
        gap: 16px;
}
`;

export const FacebookIcon = styled(FacebookIconLink)`
    width: 48px;
    height: 48px;
    color: white;
    transition: color 0.3s;

        &:hover {
        color: #ddd;
    }
`;

export const InstagramIcon = styled(InstagramIconLink)`
    width: 48px;
    height: 48px;
    color: white;
    transition: color 0.3s;

        &:hover {
        color: #ddd;
    }
`;

export const FooterCopyright = styled.div`
    margin: 0;
    line-height: 1.2;
    font-size: 18px;
`;

export const HomeButton = styled(Link)`
    background: #93A981;
    color: white;
    border: 1px solid transparent;
    border-radius: 4px;
    margin: 0 auto;
    padding: 10px;
    position: relative;
    top: -78px;
    cursor: pointer;

          svg {
    width: 40px;
    height: 40px;
    vertical-align: middle;
  }

    &:hover {
    background: #7d966d;
  }
`;