import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .above-taskbar {
    height: calc(100vh - var(--taskbar-height));
    width: 100vw;
    position: relative;
    .bg {
      background-color: #ff943d;
      object-fit: contain;
      width: 100%;
      height: 100%;
      position: absolute;
      object-position: right;
      z-index: -1;
    }
  }
`;
