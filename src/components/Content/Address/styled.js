import styled from "styled-components";
import { ReactComponent as FacebookIconLink } from "../../SvgIcons/facebookIcon.svg";
import { ReactComponent as InstagramIconLink } from "../../SvgIcons/instagramIcon.svg";

export const AddressSection = styled.section`
  padding: 40px 40px;
  padding-bottom: 40px;

  @media (max-width: 767px) {
     padding: 40px 20px;
     padding-bottom: 20px;
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
    margin-top: 0;
        @media (max-width: 767px) {
        font-size: 18px;
}
`;

export const AddressInfo = styled.address`
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
    font-weight: 700;
    text-decoration: none;
    transition: color 0.3s;
    color: #93A981;

    &:hover {
        color: #252525;
    }

    @media (max-width: 767px) {
    font-size: 17px;
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

export const AddressContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
  align-items: flex-start;

  @media (max-width: 767px) {
    flex-direction: column;
    gap:0;
  }
`;

export const MapContainer = styled.div`
flex: 1;
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
  margin-top: 20px;
  display: flex;
  justify-content: center;

  iframe {
    position: absolute;
    top: 0;
    width: 90%;
    height: 90%;
    border: 0;
    border-radius: 8px;
  }

  @media (max-width: 767px) {
    height: 300px;
  }
`;