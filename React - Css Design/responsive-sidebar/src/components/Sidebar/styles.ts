import styled from 'styled-components';
import { FaBars } from "react-icons/fa";

import colors from '../../styles/colors'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;

  margin-top: 50px;

  background: #aaaa;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }


`;

export const Wrapper = styled.div`
  position: fixed;
  left: -200px;

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

export const BarsIcon = styled(FaBars)`
  z-index: 4;

  position: fixed;
  top: 9px;
  left: 9px;

  font-size: 2rem;
  font-size: 32px;
  color: #fff;

  cursor: pointer;

  &:hover {
    ${Wrapper}:hover  {
      left: 400px;
    }
  }


`;
