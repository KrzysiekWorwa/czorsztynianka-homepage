import styled from "styled-components";

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    text-align: center;
    padding-top: 0px;
    padding-bottom: 69px;

        @media (max-width: 767px) {
        padding-bottom: 10px;;
}
`;


export const Header = styled.h2`
    font-size: 60px;
    text-align: center;
    
    @media (max-width: 767px) {
font-size: 30px;
}
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 32px;
    list-style: none;
    padding: 0;
    margin: 0;

    @media (max-width: 991px) {
        grid-template-columns: 1fr;
        grid-gap: 24px;
    }
    `;

export const Tile = styled.li`
    padding: 56px;
    border-radius: 10px;
    border: 2px solid rgb(240, 240, 240);
    margin: 0;
    box-shadow: 0 0 20px rgba(0,0,0,0.1);

    &:hover {
        border-color: rgba(3, 102, 214, 0.2);
    }

    @media (max-width: 767px) {
        padding: 20px;
        border: 2px solid rgb(241, 241, 241);
    }
`;

export const Name = styled.h3`
    font-weight: 700;
    font-size: 24px;
    margin: 0;

    @media (max-width: 767px) {
        font-size: 16px;
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
