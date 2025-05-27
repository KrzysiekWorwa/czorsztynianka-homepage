import styled from "styled-components";

export const Container = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  padding: 20px 40px;
`;

export const Image = styled.img`
    width: 100%;
    max-height: 600px;
    object-fit: cover;
`;

export const BikesSection = styled.div`
display: grid;
grid-template-columns: auto 1fr;
grid-gap: 72px;
align-items: center;
margin: 40px 0;

@media (max-width: 767px) {
        grid-template-columns: 1fr; 
        grid-template-rows: auto auto; 
        grid-gap: 16px;
    }
`;

export const BikeImage = styled.img`
    width: 100%;
    height: auto;
    max-width: 800px;
`;

export const BikeContent = styled.div``;

export const Title = styled.h1`
font-size: 38px;
font-weight: 900;
margin: 0;

@media (max-width: 767px) {
font-size: 22px;
}
`;

export const Description = styled.p`
font-size: 20px;
font-weight: 400;
letter-spacing: 5%;

@media (max-width: 767px) {
        font-size: 17px;
    }
`;