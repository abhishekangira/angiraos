import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
`;
export const Menu = styled.div`
  /* ... */
`;
export const Content = styled.div`
  /* ... */
`;
const Info = styled.div`
  display: none;
  font-size: 1.3rem;
  ${(props) =>
    props.showInfo &&
    css`
      display: block;
    `}
`;
