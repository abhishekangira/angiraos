import styled, { css } from "styled-components";

export const Icon = styled.button`
  background: none;
  display: flex;
  font-size: 1.3rem;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 9rem;
  height: min-content;
  row-gap: 1rem;
  border: none;
  cursor: pointer;
  user-select: none;
  ${(props) =>
    props.forTaskbar &&
    css`
      padding: 0.2rem;
      height: 100%;
      justify-content: center;
      width: 5rem;
    `}

  span {
    width: 100%;
    text-align: center;
    text-shadow: 2px 3px 3px rgba(0, 0, 0, 0.2);
  }

  &:hover {
    ${(props) =>
      !props.forTaskbar &&
      css`
        background-color: rgba(255, 255, 255, 0.3);
      `}
    ${(props) =>
      !props.forTaskbar &&
      props.isSelected &&
      css`
        background-color: rgba(255, 255, 255, 0.5);
      `}
  }
  ${(props) =>
    props.isSelected &&
    !props.forTaskbar &&
    css`
      background-color: rgba(255, 255, 255, 0.5);
    `}
`;

export const Rounded = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--text-dark);
  height: 5rem;
  width: 5rem;
  padding: 0.5rem;
  border-radius: 20%;

  img {
    width: 100%;
  }

  ${(props) =>
    props.forTaskbar &&
    css`
      background-color: rgba(255, 255, 255, 0.5);
      padding: 0.3rem;
      height: 3rem;
      width: 3.5rem;
    `}

  ${(props) =>
    props.forTaskbar &&
    props.isFocused &&
    !props.isMinimized &&
    css`
      background-color: #33E7FF;
    `}
      
  &:hover {
    ${(props) =>
      props.forTaskbar &&
      css`
        background-color: white;
      `}
  }
`;
