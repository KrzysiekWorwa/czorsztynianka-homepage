import styled from "styled-components";

export const CruisesSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 992px) {
    padding: 0 40px;
  }
`;

export const Header = styled.h2`
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

export const DescriptionSection = styled.div`
  order: 2;
      @media (max-width: 767px) {
    padding: 0 20px;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 16px;
  text-align: justify;

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  order: 3;

  @media (min-width: 992px) {
    order: 1;
  }
   @media (max-width: 768px) {
   padding: 0 20px;
   }
`;

export const CruiseImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  max-height: 750px;
`;
