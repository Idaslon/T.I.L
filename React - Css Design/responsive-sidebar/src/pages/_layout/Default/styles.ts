import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;

  margin-left: 50px;
  min-height: 100vh;

  transition: margin .3s ease;

  @media (min-width: 768px) {
    margin-left: 250px;
  }
`;
