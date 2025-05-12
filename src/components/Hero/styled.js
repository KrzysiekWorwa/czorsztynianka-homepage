import styled from "styled-components";
import BannerImage from "./Baner.jpg";

export const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  background-image: url(${BannerImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;

      @media (max-width: 767px) {
    height: auto;
    padding-top: 56.25%;
}
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.0); /* przyciemnia tło */
  z-index: 1;
`;