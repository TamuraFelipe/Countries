import { styled } from "styled-components";

export const Container = styled.header`
    width: 100%;
    box-shadow: 0px -2px 7px black;
    position: fixed;
    top: 0;
    z-index: 99999;
`;

export const Content = styled.div`
    max-width: 1440px;
    width: 100%;
    margin-inline: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 12px;

    > h1 {
        font-size: 20px;
    }

    @media (min-width: 769px) {

        > h1 {
            font-size: 24px;
        }
    }
`;

export const Theme = styled.div`
    display: flex;
    align-items: center;
    
    > div {
        display: flex;
        align-items: center;
        gap: 8px;

        svg {
                font-size: 24px;
        }

        p {
            font-size: 16px;
            display: none;
            font-weight: 600;
        }
    }

    @media (min-width: 769px) {

        > div {
            cursor: pointer;

            svg {
                font-size: 32px;
            }

            p {
                display: block;
                font-size: 18px;
                color: ${({ theme }) => theme.COLORS.DARK_BLUE_900};
            }
        }
    }
`;