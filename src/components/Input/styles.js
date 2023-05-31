import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 500px;
    display: flex;
    align-items: center;
    gap: 8px;
    background: ${({ theme }) => theme.COLORS.WHITE};
    transition: background .5s;
    border-radius: 8px;

    > svg {
        margin-left: 12px;
        font-size: 16px;
    }

    > input {
        width: 100%;
        height: 49px;
        border: none;
        font-size: 16px;
        border-radius: 8px;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.DARK_BLUE_900};
        }
    }

    @media (min-width: 769px){

        > svg {
            font-size: 24px;
        }
        > input {
            font-size: 18px;
        }
    }
`;