import React from 'react';
import { Button } from 'react-bootstrap';

function ButtonPrimary({ children, ...props }) {
  return <Button {...props}>{children}</Button>;
}

export default ButtonPrimary;
