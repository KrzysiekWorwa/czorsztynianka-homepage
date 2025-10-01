import styled from "styled-components";

export const Header = styled.h2`
    font-size: 48px;
    text-align: center;
    
    @media (max-width: 767px) {
font-size: 32px;
}
`;

export const PartnersWrapper = styled.div`
    background: #FBFBFE;
    padding: 40px 0;
    padding-top: 0;
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
        transform: scale(1.1);
    }
`;

export const Logo = styled.img`
    height: 100px;
    object-fit: contain;
    max-width: 100%;
`;