import styled from 'styled-components';
import { Link } from 'react-router-dom';

import colors from '../../../styles/colors'

export const Container = styled(Link)`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 12px 0px;

  cursor: pointer;
  transition: margin .4s;

  &:first-child {
    margin-top: 50px;
  }

  @media (min-width: 768px) {
    &:hover{
      background: ${colors.terteary}
    }
  }

  > svg {
    position: fixed;
    left: 9px;

    margin-right: 20px;

    font-size: 1.75rem;
    font-size: 28px;
    color: #fff;

    @media (max-width: 768px) {
      &:hover {
        color: #7159c1;
      }
    }
  }
`;

export const Name = styled.span`
  margin-left: 50px;

  font-size: 1.5rem;
  font-size: 24px;
  color: #fff;
`;
