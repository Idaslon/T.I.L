import styled from 'styled-components';

import colors from '../../styles/colors'

export interface ContainerProps {
  completeSidebar: boolean;
}

export const BarsIcon = styled.div`
  z-index: 4;

  position: fixed;
  top: 9px;
  left: 9px;

  > svg {
    font-size: 2rem;
    font-size: 32px;
    color: #fff;
  }

  cursor: pointer;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 250px;
  margin-top: 50px;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

`;

export const Container = styled.div<ContainerProps>`
  position: fixed;
  left: ${props => props.completeSidebar ? '0' : '-200px'};

  display: flex;
  flex-direction: column;

  width: 250px;
  max-height: 100vh;

  background: ${colors.secondary};
  transition: all .3s ease;

  @media (min-width: 768px) {
    left: 0;
  }
`

export const Wrapper = styled.div`
  /* ${BarsIcon}:hover + ${Container} {
    left: 0;
  } */

`
