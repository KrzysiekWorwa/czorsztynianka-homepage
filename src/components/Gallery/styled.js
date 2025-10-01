import styled from "styled-components";

export const GalleryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    order: 4;
;`

export const GalleryGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 16px;
    padding: 20px;

      @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const GalleryImage = styled.img`
    width: 100%;
    aspect-ratio: 3 / 2;
    border-radius: 8px;
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.03);
    }
`;

export const GalleryHeader = styled.h2`
    display: flex;
  font-size: 48px;
  color: #252525;
  text-align: center;
  margin: 20px 20px;

        @media (max-width: 767px) {
     font-size: 32px;
  }
`;

export const AnimatedWrapper = styled.div`
  overflow: hidden;
`;

export const ButtonDiv = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export const ShowMoreButton = styled.button`
  color: white;
  padding: 30px 40px;
  font-size: 23px;
  font-weight: bold;
  border: 2px solid hsla(93, 19%, 58%, 1.00);
  border-radius: 10px;
  cursor: pointer;
  margin: 0;
  transition: background-color 0.3s, border-color 0.3s;
  background-color: hsla(93, 19%, 58%, 1.00);

    &:hover {
        background-color: hsla(93, 30%, 67%, 1.00);
        border-color: hsla(93, 30%, 67%, 1.00);
    }

    @media (max-width: 992px) {
        padding: 20px;
        font-size: 22px;
    }
`;

export const SubHeader = styled.h3`
    font-size: 24px;
    text-align: left;
    
        @media (max-width: 767px) {
        font-size: 18px;
}
`;