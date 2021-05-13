import styled, { css } from "styled-components";

export const Icon = styled.button`
  background: none;
  display: flex;
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
  img {
    width: 100%;
    object-fit: contain;
  }
  ${(props) =>
    props.forTaskbar &&
    css`
      justify-content: center;
      height: 100%;
      width: 5rem;
      img {
        width: 80%;
      }
    `}

  span {
    width: 100%;
    text-align: center;
    text-shadow: 2px 3px 3px rgba(0, 0, 0, 0.2);
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    ${(props) =>
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
  ${(props) =>
    props.forTaskbar &&
    props.isFocused &&
    !props.isMinimized &&
    css`
      background-color: rgba(255, 255, 255, 0.5);
    `}
`;
