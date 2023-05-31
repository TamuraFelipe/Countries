import { styled } from "styled-components";

export const Container = styled.section`
    width: 100%;
`;

export const Content = styled.div`
    max-width: 1440px;
    margin-inline: auto;
    position: relative;
    top: 90px;
    padding: 12px;

    > a {
        width: fit-content;
        display: flex;
        align-items: center;
        gap: 16px;
        font-size: 18px;
        padding: 12px;
        box-shadow: 0px 0px 7px black;
        border-radius: 8px;
        margin-bottom: 24px;

        svg {
            font-size: 18px;
        }
    }
`;

export const Country = styled.div`
    
    > img {
        display: block;
        width: 100%;
        
    }

    .country-details {
        margin-top: 24px;

        h2 {
            margin-bottom: 24px;
        }
        .details-one {
            margin-bottom: 24px;
        }
        .details-two {
            margin-bottom: 24px;
        }
        .details-borders {
            padding-bottom: 24px;
            display: flex;
            flex-direction: column;
            gap: 12px;

            ul {
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                gap: 24px;
                
                li {
                    height: 49px;
                    a {
                        padding: 8px;
                        box-shadow: 0 0 7px black;
                    }
                }
            }
        }
    }

    @media (min-width: 769px) {
        display: flex;
        justify-content: space-between;
        align-items: center;

        img {
            width: 45%;
        }
        .country-details {
            width: 35%;
        }
    }
`;