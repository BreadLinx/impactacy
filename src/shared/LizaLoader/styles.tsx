import styled, { keyframes } from "styled-components";

const dashArray = keyframes`
  0% {
    stroke-dasharray: 0 1 359 0;
  }

  50% {
    stroke-dasharray: 0 359 1 0;
  }

  100% {
    stroke-dasharray: 359 1 0 0;
  }
`;
const dashOffset = keyframes`
  0% {
    stroke-dashoffset: 365;
  }

  100% {
    stroke-dashoffset: 5;
  }
`;

interface LizaLoaderProps {
  widthParam: number;
  heightParam: number;
}

export const LizaLoader = styled.svg<LizaLoaderProps>`
  width: ${({ widthParam }) => widthParam}px;
  height: ${({ heightParam }) => heightParam}px;

  & path {
    stroke: #000;
    stroke-width: 0.6px;
    animation: ${dashArray} 4s ease-in-out infinite,
      ${dashOffset} 4s linear infinite;
  }
`;
