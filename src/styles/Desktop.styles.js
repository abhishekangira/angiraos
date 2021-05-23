import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  .bg {
    background-color: #2c2c2c;
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    object-position: center;
    z-index: -1;
  }
  .above-taskbar {
    height: calc(100% - var(--taskbar-height));
    width: 100%;
    position: relative;
  }
`;
