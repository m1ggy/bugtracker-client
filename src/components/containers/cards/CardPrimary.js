import { Card } from 'react-bootstrap';
import React from 'react';

function CardPrimary({ children, title, footer, ...props }) {
  return (
    <Card {...props}>
      <Card.Body>
        {title && <Card.Title>{title}</Card.Title>}
        {children}
      </Card.Body>
      <Card.Footer>{footer && footer}</Card.Footer>
    </Card>
  );
}

export default CardPrimary;
