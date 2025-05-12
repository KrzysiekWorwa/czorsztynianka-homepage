import styled from "styled-components";
import Image from "./cruise.jpg"

export const CruisesSection = styled.section`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;

      @media (min-width: 991px) {
        background-image: url(${Image});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 800px;
    }
`;

export const ContentWrapper = styled.div`
     background: rgba(0, 0, 0, 0.3);
     padding-bottom: 15px;

         @media (max-width: 991px) {
            background: none;
}
`;

export const Header = styled.h2`
    font-size: 60px;
    text-align: center;
    color: white;
    
    @media (max-width: 767px) {
        font-size: 30px;
        color: #252525;
}
        @media (max-width: 991px) {
        color: #252525;
}
`;

export const Description = styled.p`
    font-size: 18px;
    margin-top: 24px;
    line-height: 1.4;
    margin: 10px;
    color: white;

    @media (max-width: 991px) {
        color: #252525
    }

        @media (max-width: 767px) {
        margin-top: 16px;
        font-size: 14px;
        color: #252525
    }
`;

export const CruiseImage = styled.img`
    width: 100%;
    height: auto;
    display: block;

    @media (min-width: 991px) {
        margin-top: 16px;
        display: none;
    }
`;