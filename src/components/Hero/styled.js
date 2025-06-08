import styled from "styled-components";
import BannerImage from "./New-logo.webp";

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
  padding-top: 90px;

      @media (max-width: 767px) {
        height: 50vh;
}
`;