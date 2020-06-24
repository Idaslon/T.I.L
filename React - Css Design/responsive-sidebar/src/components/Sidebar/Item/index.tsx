import React from 'react';

import { Container, ContainerProps, Name } from './styles';

interface OwnProps {
  name: string;
  to: string;
  icon: any;
}

type ItemProps = OwnProps & ContainerProps;

const Item: React.FC<ItemProps> = ({ name, icon: Icon, to, open }) => {

  return (
    <Container to={to} open={open}>
      <Icon></Icon>
      <Name>{name}</Name>
    </Container>
  )
}

export default Item;
