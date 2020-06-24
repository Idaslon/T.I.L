import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import colors from '../../../styles/colors'

export interface ContainerProps {
  open: boolean;
}

const OpenSidebarStilization = css`
  left: 0;

  &:hover{
    background: ${colors.terteary}
  }
`;

export const Container = styled(Link)<ContainerProps>`
  position: relative;
  left: 200px;

  display: flex;
  align-items: center;

  width: 100%;
  padding: 12px 0px;

  cursor: pointer;
  transition: all .3s ease;

  ${(props) => props.open && OpenSidebarStilization}

  > svg {
    margin-left: 9px;
    margin-right: 20px;

    font-size: 28px;
    font-size: 1.75rem;
    color: #fff;

    &:hover {
      color: ${props => !props.open && '#7159c1'};
    }
  }
`;

export const Name = styled.span`
  font-size: 24px;
  font-size: 1.5rem;
  color: #fff;
`;
