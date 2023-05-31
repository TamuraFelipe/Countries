import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        font-family: 'Nunito Sans', sans-serif;
    }
    body{
        background: ${({ theme }) => theme.COLORS.WHITE_100};
        transition: background .5s;
    }

    header {
        background: ${({ theme }) => theme.COLORS.WHITE};
        transition: background .5s;

    }
    a {
        text-decoration: none;
    }
    ul {
        list-style: none;
    }
    .dark header {
        background: ${({ theme }) => theme.COLORS.DARK_BLUE_800};
        transition: background .5s;
    }

    .dark {
        transition: background .5s;
    }
    body.dark {
        background: ${({ theme }) => theme.COLORS.DARK_BLUE_800};
    }
    h1, h2,  p, a, svg {
        color: ${({ theme }) => theme.COLORS.DARK_BLUE_900};
        font-family: 'Nunito Sans', sans-serif;
    }
    .dark h1, .dark h2, .dark p, .dark a, .dark svg {
        color: ${({ theme }) => theme.COLORS.WHITE} !important;
    }
    input {
        background: ${({ theme }) => theme.COLORS.WHITE};
        transition: background .5s;
        padding-inline: 12px;
    }
    .dark input {
        background: ${({ theme }) => theme.COLORS.DARK_BLUE_700};
        color: ${({ theme }) => theme.COLORS.WHITE};
        transition: background .5s;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
    .dark .box-input {
        background: ${({ theme }) => theme.COLORS.DARK_BLUE_700} !important;
        transition: background .5s;
    }
    select {
        transition: background .5s;
    }
    .dark select {
        background: ${({ theme }) => theme.COLORS.DARK_BLUE_700} !important;
        transition: background .5s;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    .box-card {
        background-color: ${({ theme }) => theme.COLORS.WHITE};
        transition: background .5s;
        border-radius: 8px;
        cursor: pointer;
    }
    .dark .box-card {
        background: ${({ theme }) => theme.COLORS.DARK_BLUE_700} !important;
        transition: background .5s;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

`;

/*

font-family: 'Nunito Sans', sans-serif;

*/