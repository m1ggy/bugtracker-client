import React from 'react';
import { Form } from 'react-bootstrap';
function Field({ label, children, ...props }) {
  return (
    <Form.Group>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control {...props} />
      {children}
    </Form.Group>
  );
}

export default React.memo(Field);
