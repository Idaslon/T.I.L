import React, { forwardRef, useCallback, useState, useMemo } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import { useSafeRef } from '~/hooks/native';

import Input, { InputProps, InputRef } from '../Input';

interface Props extends Omit<InputProps, 'type'> {
  initialVisible?: boolean;
}

const PasswordInput = ({ initialVisible, ...rest }: Props, ref: InputRef) => {
  const inputRef = useSafeRef(ref);
  const [textVisible, setTextVisible] = useState(initialVisible || false);

  const handleIconClick = useCallback(() => {
    setTextVisible(!textVisible);
  }, [textVisible]);

  const passwordState = useMemo(() => {
    if (textVisible) {
      return {
        icon: FiEye,
        type: 'text',
      };
    }

    return {
      type: 'password',
      icon: FiEyeOff,
    };
  }, [textVisible]);

  return <Input ref={inputRef} onIconClick={handleIconClick} {...passwordState} {...rest} />;
};

export default forwardRef(PasswordInput);
