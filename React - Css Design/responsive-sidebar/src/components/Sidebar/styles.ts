import styled, { css } from 'styled-components';

import colors from '../../styles/colors'

export interface ContainerProps {
  open: boolean;
}

export const Wrapper = styled.div``

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

const OpenSidebarStilization = css`
  left: 0;
`;

export const Container = styled.div<ContainerProps>`
  position: fixed;
  left: -200px;

  display: flex;
  flex-direction: column;

  width: 250px;
  max-height: 100vh;

  background: ${colors.secondary};
  transition: all .3s ease;

  ${(props) => props.open && OpenSidebarStilization}
`

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
