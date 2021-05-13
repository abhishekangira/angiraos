import { animated } from "@react-spring/web";
import styled from "styled-components";

const Fade = styled(animated.div)``;

const Wrapper = styled.div`
  position: absolute;
  height: 20rem;
  width: 16rem;
  background: var(--primary-dark);
  color: var(--text-dark);
  font-size: var(--fsize-regular);
  display: ${({ hidden }) => (hidden ? "none" : "block")};
  z-index: 49;
  top: ${({ top }) => top && top + "px"};
  left: ${({ left }) => left && left + "px"};
  right: ${({ right }) => right && right + "px"};
  bottom: ${({ bottom }) => bottom && `${bottom - 35}px`};
`;

export { Wrapper, Fade };
