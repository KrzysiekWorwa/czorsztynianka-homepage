import styled from "styled-components";

export const Header = styled.h2`
    font-size: 60px;
    text-align: center;
    
    @media (max-width: 767px) {
font-size: 30px;
}
`;

export const Description = styled.p`
    font-size: 18px;
    margin-top: 24px;
    line-height: 1.4;

    @media (max-width: 767px) {
        margin-top: 16px;
        font-size: 14px;
    }
`;

export const CruiseImage = styled.img`
    width: 100%;
    height: auto;
`;