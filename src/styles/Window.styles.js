import styled, { css } from "styled-components";
import { animated } from "@react-spring/web";

const Animated = styled(animated.div)``;

const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  & > div {
    height: 3.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #2c2c2c;
    color: #fff;
    white-space: nowrap;
    span {
      font-size: 1.4rem;
      margin-left: 1rem;
      overflow: hidden;
    }
  }
  .fullscreen {
    width: 100%;
    height: 100%;
    #frame {
      width: 100%;
      height: 100%;
      cursor: auto;
      ${(props) =>
        props.showInfo &&
        css`
          display: none;
        `}
    }
  }
`;

const Titlebar = styled.div`
  /* display: flex;
  align-items: center;
  height: 100%; */
`;

const Buttons = styled.div`
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
  height: 100%;
  width: 100%;
  background: #2c2c2c;
  display: none;
  ${(props) =>
    props.showInfo &&
    css`
      display: block;
    `}
`;

export { Content, Titlebar, Buttons, Markdown, Animated };
