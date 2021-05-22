import styled from "styled-components";

export const Wrapper = styled.div`
  display: ${(props) => (props.visible ? "block" : "none")};
`;
