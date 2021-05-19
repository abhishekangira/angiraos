import styled, { css } from "styled-components";

const Content = styled.div`
  pointer-events: auto;
  display: flex;
  flex-direction: column;
  color: var(--text-dark);
  height: 100%;
  width: 100%;
  .fullscreen {
    height: 100%;
    width: 100%;
  }
`;

const Titlebar = styled.div`
  height: 3.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  span {
    font-size: 1.4rem;
    margin-left: 1rem;
    overflow: hidden;
  }
`;

const Frame = styled.div`
  cursor: auto;
  height: 100%;
  width: 100%;
  background-color: #2c2c2c;
  iframe {
    height: 100%;
    width: 100%;
  }
  ${(props) =>
    props.showInfo &&
    css`
      display: none;
    `}
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  width: min-content;
  button {
    background: none;
    font-size: 1.4rem;
    color: #c9c9c9;
    padding: 0.5rem;
    border: none;
    height: 100%;
    cursor: pointer;
    padding: 1rem;
    user-select: none;
    line-height: 0;
    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }
`;

const Markdown = styled.div`
  display: none;
  ${(props) =>
    props.showInfo &&
    css`
      display: block;
    `}
`;

export { Content, Titlebar, Buttons, Markdown, Frame };
