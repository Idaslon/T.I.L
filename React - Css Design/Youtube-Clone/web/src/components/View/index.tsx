import React from 'react';

import { Container, NoDataContainer, NoDataText, LoadingSpinner } from './styles';

interface OwnProps {
  children?: React.ReactNode;
  loading: boolean;
  hasData: boolean;
}

const View = ({ loading, hasData, children }: OwnProps) => {
  if (loading) {
    return (
      <Container>
        <LoadingSpinner />
      </Container>
    );
  }

  if (!hasData) {
    return (
      <NoDataContainer>
        <NoDataText>Nenhum dado encontrado</NoDataText>
      </NoDataContainer>
    );
  }

  return <>{children}</>;
};
export default View;
