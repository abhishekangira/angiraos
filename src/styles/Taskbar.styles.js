import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--taskbar-height);
  background-color: var(--primary-dark);
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
  justify-content: center;
  height: 100%;
  width: 5rem;
  cursor: pointer;
  padding: 0.6rem;
  user-select: none;
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
  img {
    height: 100%;
    filter: invert(88%);
  }
`;

const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Time = styled.span`
  font-size: 1.3rem;
  color: var(--text-dark);
  user-select: none;
  margin-right: 1rem;
`;

export { Wrapper, Left, StartIcon, Right, Time };
