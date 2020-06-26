import React from 'react';

import { useAuth } from '../../contexts/auth';

import { Container, Title, Button } from './styles';

const SignIn: React.FC = () => {
  const { signed, user, signIn } = useAuth();

  console.log('signed', signed);
  console.log('user', user);

  return (
    <Container>
      <Title>{user?.name}</Title>
      <Button onClick={signIn}>SignIn</Button>
    </Container>
  )
}

export default SignIn;
