import React from 'react';

import { Container, ContainerProps, Name } from './styles';

interface OwnProps {
  name: string;
  to: string;
  icon: any;
}

type ItemProps = OwnProps & ContainerProps;

const Item: React.FC<ItemProps> = ({ name, icon: Icon, to, sidebarOpen }) => {

  return (
    <Container to={to} sidebarOpen={sidebarOpen}>
      <Icon></Icon>
      <Name>{name}</Name>
    </Container>
  )
}

export default Item;
