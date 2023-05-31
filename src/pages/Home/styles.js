import { styled } from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100vh;

    > div {
        width: 100%;
        max-width: 1440px;
        margin-inline: auto;
        position: relative;
        top: 90px;
        padding: 12px;

        div {
            margin-bottom: 16px;
        }
    }

    @media (min-width: 769px) {

        > div {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
`;

export const Select = styled.select`
    width: 100%;
    max-width: 300px;
    height: 49px;
    border-radius: 8px;
    border: none;
    padding: 12px;
`;

export const Cards = styled.div`
    width: 100%;
    max-width: 1440px;
    margin-inline: auto;
    display: grid !important;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-gap: 16px;
    
    @media (min-width: 577px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 769px) {
        grid-template-columns: repeat(4, 1fr);
        gap: 40px;
    }
`;