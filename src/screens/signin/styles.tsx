import styled from "styled-components";

export const Container = styled.section`
  width: 400px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  gap: 50px;
`;

export const Title = styled.h1`
  font-size: 50px;
  font-weight: 900;
  line-height: 61px;
  letter-spacing: 0;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
