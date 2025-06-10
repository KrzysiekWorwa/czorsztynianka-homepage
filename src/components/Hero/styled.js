import styled from "styled-components";

export const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  padding-top: 90px;

      @media (max-width: 767px) {
        height: 50vh;
}
`;

export const HeroImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;