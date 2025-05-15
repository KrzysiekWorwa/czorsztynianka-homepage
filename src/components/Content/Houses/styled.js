import styled from "styled-components";

export const HousesSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 992px) {
    flex-direction: column;
  }
`;

export const HousesHeader = styled.h2`
  font-size: 32px;
  color: #252525;
  text-align: center;
  margin: 20px 0;

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
      bottom: 20%;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0, 0, 0, 0.4);
      color: white;
      padding: 20px 40px;
      border-radius: 8px;
      font-size: 48px;
      margin: 0;
      z-index: 2;
      display: block;
    }
  }
`;

export const HousesDescriptionSection = styled.div`
  order: 2;
  padding: 0 40px;
    @media (max-width: 767px) {
    padding: 0 20px;
  }
`;

export const HousesDescription = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 16px;
  text-align: justify;

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const HousesImageWrapper = styled.div`
  position: relative;
  width: 100%;
  order: 3;
  padding: 0 10px;

  @media (min-width: 992px) {
    order: 1;
      padding: 0 40px;
  }
`;

export const HousesImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
max-height: 750px;
`;
