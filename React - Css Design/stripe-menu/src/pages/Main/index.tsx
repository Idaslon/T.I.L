import React from 'react';

import { Form, PasswordInput } from '~/components/Form';

import { Container } from './styles';

const Main = () => {
  return (
    <Container>
      <h1>Main</h1>

      <Form onSubmit={() => {}} width={300}>
        {/* <Input name="name" /> */}
        <PasswordInput name="password" />
      </Form>
    </Container>
  );
};
export default Main;
