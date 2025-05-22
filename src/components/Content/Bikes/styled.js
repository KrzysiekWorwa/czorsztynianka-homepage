import styled from "styled-components";
import bikesImage from "./images/rowery.jpg";

export const BikesSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 40px;
  padding-bottom: 0px;

  @media (max-width: 767px) {
    padding: 40px 20px;
    padding-bottom: 0px;
  }
`;

export const BikesHeader = styled.h2`
  font-size: 48px;
  color: #252525;
  text-align: center;
  margin: 20px 0;

        @media (max-width: 767px) {
     font-size: 32px;
  }
  &.mobile-header {
    display: block;

    @media (min-width: 992px) {
      display: none;
    }
  }

  &.desktop-header {
    display: none;

    @media (min-width: 992px) {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.4);
      color: white;
      padding: 40px;
      font-size: 48px;
      margin: 0;
      z-index: 2;
      display: block;
      backdrop-filter: blur(3px);
    }
  }
`;

export const BikesDescriptionSection = styled.div`
  order: 2;
`;

export const BikesDescription = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 16px;
  text-align: justify;

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const BikesImageWrapper = styled.div`
  position: relative;
  width: 100%;
  order: 3;

  @media (min-width: 992px) {
    order: 1;
    background-image: url(${bikesImage});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    height: 500px;
    width: 100vw;
  }
`;

export const BikesImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  max-height: 750px;

    @media (min-width: 992px) {
    display: none;
  }
`;
