import React from 'react';
import { Form } from 'react-bootstrap';
function Field({ label, props }) {
  return (
    <Form.Group>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control {...props} />
    </Form.Group>
  );
}

export default Field;
