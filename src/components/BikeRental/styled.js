import styled from "styled-components";

export const Container = styled.section`
  padding: 20px 40px;
  padding-bottom: 0px;

    @media (max-width: 767px) {
     padding: 20px 20px;
  }
`;

export const Header = styled.h2`
  font-size: 48px;
  color: #252525;
  text-align: center;
  margin: 20px 0;

        @media (max-width: 992px) {
     font-size: 32px;
  }
  `;

export const BikesSection = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 72px;
  align-items: center;
  margin: 40px 0;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0,0,0,0.1);
  padding: 20px;

@media (max-width: 992px) {
        grid-template-columns: 1fr; 
        grid-template-rows: auto auto; 
        grid-gap: 16px;
        text-align: center;
    }
`;

export const BikeImage = styled.img`
    width: 100%;
    max-width: 500px;
    object-fit: contain;
    display: block;
    margin: 0 auto;
    
      @media (max-width: 992px) {
        justify-self: center;
  }
`;

export const BikeContent = styled.div``;

export const Title = styled.h2`
font-size: 30px;
font-weight: bold;
margin: 0;

@media (max-width: 767px) {
font-size: 22px;
}
`;

export const Description = styled.p`
font-size: 18px;
font-weight: 400;
line-height: 1.4;

@media (max-width: 767px) {
        font-size: 14px;
        text-align: left;
    }
`;

export const ButtonDiv = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export const ShowMoreButton = styled.button`
  background: white;
  color: black;
  padding: 30px 40px;
  font-size: 23px;
  font-weight: bold;
  border: 2px solid rgb(240, 240, 240);
  border-radius: 10px;
  cursor: pointer;
  margin: 0;
  box-shadow: 0 0 20px rgba(0,0,0,0.1);

    &:hover {
        border-color: rgba(3, 102, 214, 0.2);
        color: rgb(68, 68, 68);
    }

    @media (max-width: 992px) {
        padding: 20px;
        font-size: 22px;
    }
`;