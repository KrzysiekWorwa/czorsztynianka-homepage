import styled from "styled-components";
import { ReactComponent as FacebookIconLink } from "./SvgIcons/facebookIcon.svg";
import { ReactComponent as InstagramIconLink } from "./SvgIcons/instagramIcon.svg";

export const AddressSection = styled.section`
  padding: 0 40px;

  @media (max-width: 767px) {
     padding: 40px 20px;
     padding-bottom: 0px;
  }
`;

export const AddressHeader = styled.h2`
    font-size: 48px;
    text-align: center;
    margin-top: 0;
    
    @media (max-width: 767px) {
        font-size: 32px;
}
`;

export const AddressSubHeader = styled.h3`
    font-size: 24px;
        @media (max-width: 767px) {
        font-size: 18px;
}
`;

export const AddressDescription = styled.p`
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: initial;
    margin: 0%;
`;

export const AdressInfo = styled.address`
    font-style: normal;
`;

export const LinkWrapper = styled.div`
    margin: 12px 0;

    @media (max-width: 767px) {
    margin: 12px 0;
}
`;

export const AddressLink = styled.a`
    font-size: 24px;
    font-weight: 900;
    text-decoration: none;
    transition: color 0.3s;
    color: #252525;

    &:hover {
        color: #93A981;
    }

    @media (max-width: 767px) {
    font-size: 18px;
}
`;

export const Info = styled.p`
    font-size: 18px;
    font-weight: 400;
    max-width: 670px;
    line-height: 1.4;

    @media (max-width: 767px) {
    font-size: 14px;
}
`;

export const IconsWrapper = styled.div`
    display: flex;
    gap: 24px;
    margin-top: 24px;

    @media (max-width: 767px) {
        margin: 18px 0;
        gap: 16px;
}
`;

export const FacebookIcon = styled(FacebookIconLink)`
    width: 48px;
    height: 48px;
    color: #252525;
    transition: color 0.3s;

        &:hover {
        color: #93A981;
    }
`;

export const InstagramIcon = styled(InstagramIconLink)`
    width: 48px;
    height: 48px;
    color: #252525;
    transition: color 0.3s;

        &:hover {
        color: #93A981;
    }
`;