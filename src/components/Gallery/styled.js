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
  margin: 20px 0;

        @media (max-width: 767px) {
     font-size: 32px;
  }
`;