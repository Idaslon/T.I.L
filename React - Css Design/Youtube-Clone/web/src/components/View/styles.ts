import styled, { keyframes } from 'styled-components';

import { FiLoader } from 'react-icons/fi';

export const Container = styled.div`
  display: flex;
  flex: 1;

  justify-content: center;
  align-items: center;

  height: 100vh;
`;

export const NoDataContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 80%;

  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;

  border-radius: 1px;
`;

export const NoDataText = styled.h3`
  display: flex;
  flex: 1;

  justify-content: center;
  align-items: center;

  padding: 30px;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingSpinner = styled(FiLoader)`
  font-size: 50px;

  animation: ${rotate360} 3s linear infinite;
`;
