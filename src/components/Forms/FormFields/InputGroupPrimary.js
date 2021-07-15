import React from 'react';
import { InputGroup, Form } from 'react-bootstrap';
function InputGroupPrimary({ children, text, ...props }) {
  return (
    <InputGroup>
      <Form.Control {...props} />
      {text && (
        <InputGroup.Text style={{ padding: 'none', margin: 'none' }}>
          {text}
        </InputGroup.Text>
      )}
      {children}
    </InputGroup>
  );
}

export default InputGroupPrimary;
