import styled from "styled-components";
import { a } from "@react-spring/web";


const Wrapper = styled(a.div)`
  position: absolute;
  width: 16rem;
  white-space: nowrap;
  user-select: none;
  background: var(--primary-dark);
  color: var(--text-dark);
  font-size: var(--fsize-regular);
  display: ${({ hidden }) => (hidden ? "none" : "block")};
  z-index: 49;
  top: ${({ top }) => top && top + "px"};
  left: ${({ left }) => left && left + "px"};
  right: ${({ right }) => right && right + "px"};
  bottom: ${({ bottom }) => bottom && `${bottom - 35}px`};
  @media (max-width: 600px) {
    background: mediumseagreen;
    color: papayawhip;
  }
`;

export { Wrapper };
