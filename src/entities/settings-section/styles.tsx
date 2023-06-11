import styled from "styled-components";

export const Section = styled.section`
  background-color: #ececec;
  border-radius: 20px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

export const LoadingSection = styled(Section)`
  justify-content: center;
  align-items: center;

  min-height: 150px;
`;

export const TextBlock = styled.div``;

export const Title = styled.h2``;

export const Text = styled.p``;
