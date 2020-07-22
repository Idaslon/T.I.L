import React, { useEffect, forwardRef } from 'react';
import { IconType } from 'react-icons/lib';

import { useField } from '@unform/core';

import { useSafeRef } from '~/hooks/native';

import { Container, ContainerProps, StyledInput, Error, Label, InnerContainer } from './styles';

type InputAttributes = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'defaultValue' | 'value' | 'width'>;

interface OwnProps {
  name: string;
  label?: string;
  icon?: IconType;
  onIconClick?: () => void;
}

export type InputProps = OwnProps & ContainerProps & InputAttributes;
export type InputRef = React.Ref<HTMLInputElement>;

const Input = (
  { name, label, type, marginTop, marginBottom, marginLeft, marginRight, icon: Icon, onIconClick, ...rest }: InputProps,
  ref: InputRef
) => {
  const inputRef = useSafeRef(ref);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: type === 'checkbox' ? 'checked' : 'value',
    });
  }, [fieldName, inputRef, registerField, type]);

  return (
    <Container marginTop={marginTop} marginBottom={marginBottom} marginLeft={marginLeft} marginRight={marginRight}>
      {label ? <Label invalid={error ? 1 : 0}>{label}</Label> : null}

      {Icon !== undefined ? (
        <InnerContainer>
          <StyledInput
            ref={inputRef}
            defaultValue={defaultValue}
            defaultChecked={defaultValue}
            gone
            type={type}
            {...rest}
          />

          <Icon onClick={onIconClick} />
        </InnerContainer>
      ) : (
        <StyledInput ref={inputRef} defaultValue={defaultValue} defaultChecked={defaultValue} type={type} {...rest} />
      )}

      {error && <Error>{error}</Error>}
    </Container>
  );
};

export default forwardRef(Input);
