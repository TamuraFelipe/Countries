import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin-inline: auto;
    margin-top: 24px;
    height: 100%;

    > a {
        img {
            display: block;
            width: 100%;
            height: 170px;
            border-top-right-radius: 8px;
            border-top-left-radius: 8px;
        }
        h2, p {
            padding: 12px;
        }
    }
    @media (max-width: 576px){
        > a {
            img {
                height: initial;
            }
        }
    }
`;