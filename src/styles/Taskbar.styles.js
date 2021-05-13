import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--taskbar-height);
  background: #2c2c2c;
  width: 100%;
  z-index: 50;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const StartIcon = styled.span`
  display: inline-flex;
  align-items: center;
  font-size: 1.5rem;
  color: #d6d6d6;
  height: 100%;
  cursor: pointer;
  padding: 0 1rem;
  user-select: none;
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const Right = styled.div`
  /* ... */
`;

const Time = styled.span`
  font-size: 1.3rem;
  color: #d6d6d6;
  height: 100%;
  user-select: none;
  margin-right: 1rem;
`;

export { Wrapper, Left, StartIcon, Right, Time };
