import { createGlobalStyle } from "styled-components";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const GlobalStyle = createGlobalStyle`
  html,
  body {
    background-color: #fff;
    padding: 0;
    margin: 0;
    font-family: ${inter.style.fontFamily}, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    overflow-y: overlay;
  }
  button {
    font-family: ${inter.style.fontFamily}, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    padding: 0;
    border: none;
    outline: none;
    background-color: initial;
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  ul {
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }

  svg {
    display: block;
    overflow: visible;
    overflow-clip-margin: unset;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin-top: 0;
    margin-bottom: 0;
    font-family: ${inter.style.fontFamily}, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 7px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background-color: initial;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background-color: #cbcbcb;
    transition: background-color 2s ease-in-out;
    border-radius: 4px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;

export default GlobalStyle;
