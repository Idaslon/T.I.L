import styled from 'styled-components';
import { FaBars } from "react-icons/fa";

import colors from '../../styles/colors'

export const Content = styled.div`
  position: fixed;
  top: 0;
  left: -200px;

  width: 250px;
  min-height: 100vh;
  background: ${colors.secondary};

  transition: all .3s ease-in;

  @media (min-width: 768px) {
    left: 0;
  }
`;

export const BarsIcon = styled(FaBars)`
  z-index: 4;

  position: fixed;
  top: 9px;
  left: 9px;

  font-size: 2rem;
  font-size: 32px;
  color: #fff;

  cursor: pointer;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 250px;

  ${BarsIcon}:hover + ${Content} {
    left: 0;
  }
`
