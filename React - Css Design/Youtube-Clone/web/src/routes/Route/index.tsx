import React from 'react';
import { Route as RouteWrapper, Redirect, RouteProps } from 'react-router-dom';

interface OwnProps {
  isPublic?: boolean;
  isToKeep?: boolean;
}

type Props = RouteProps & OwnProps;

const Route = ({ isPublic, isToKeep, ...rest }: Props) => {
  // Need to check if its first time?

  // update with signed value on your state
  const signed = true;

  if (isToKeep) {
    return <RouteWrapper {...rest} />;
  }

  if (isPublic && signed) {
    return <Redirect to="/dashboard" />;
  }

  if (!isPublic && !signed) {
    return <Redirect to="/login" />;
  }

  return <RouteWrapper {...rest} />;
};

export default Route;
