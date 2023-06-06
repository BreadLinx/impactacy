import styled from "styled-components";

export const PageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  gap: 20px;
  height: 100vh;
  max-width: 100%;
  margin: 0 auto;
  padding-left: 328px;
  padding-top: 20px;
`;

export const Main = styled.main`
  width: calc((100vw - 338px) * 0.7);
  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
`;

export const Aside = styled.aside`
  position: fixed;
  top: 20px;
  right: 10px;
  background-color: #d0d0d0;
  border-radius: 20px;
  width: calc((100vw - 338px) * 0.3 - 10px);
  height: calc(100vh - 40px);
  max-height: calc(100vh - 40px);
  overflow-y: overlay;
  padding: 20px;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 0;
  }
`;
