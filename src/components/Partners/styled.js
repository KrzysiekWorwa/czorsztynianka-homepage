import styled from "styled-components";

export const PartnersWrapper = styled.div`
    background: #FBFBFE;
    padding: 40px 0;
    margin-bottom: 80px;

     @media (max-width: 767px) {
        margin-bottom: 50px;
    }
`;

export const SlideContent = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }
`;

export const Logo = styled.img`
    height: 60px;
    object-fit: contain;
    max-width: 100%;
`;