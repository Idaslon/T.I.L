import styled from 'styled-components';

import { Form as Unform } from '@unform/web';

import { Size, useSize } from '~/hooks/styled';

export type StyledFormProps = Size;

export const StyledForm = styled(Unform)`
  ${useSize}
`;
