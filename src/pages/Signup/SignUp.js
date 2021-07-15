import React, { useState } from 'react';
import '@shared/style.css';
import {
  CardPrimary,
  Field,
  ButtonPrimary,
  InputGroupPrimary,
} from '@components/index';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function SignUp() {
  const [seePass, setSeePass] = useState(false);
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className='wrapper'>
      <CardPrimary
        className='card'
        title='Create an Account'
        footer={
          <p>
            Already have an account? <Link to='/'>Login.</Link>
          </p>
        }
      >
        <Form>
          <Field
            label='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Field
            label='First Name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <Field
            label='Last Name'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <InputGroupPrimary
              required
              type={seePass ? 'text' : 'password'}
              label='Password'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              text={
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setSeePass(!seePass);
                  }}
                  style={{
                    margin: 'none',
                    border: 'none',
                    borderRadius: 5,
                    padding: 'none',
                    backgroundColor: seePass ? '#007bff' : null,
                  }}
                  type='submit'
                  variant={seePass ? 'primary' : 'success'}
                >
                  👀
                </button>
              }
            />
          </Form.Group>
          <ButtonPrimary type='submit'>Submit</ButtonPrimary>
        </Form>
      </CardPrimary>
    </div>
  );
}

export default SignUp;
