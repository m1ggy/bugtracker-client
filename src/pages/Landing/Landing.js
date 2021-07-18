import React, { useState } from 'react';
import { Field, ButtonPrimary, InputGroupPrimary } from '@components/index';
import { CardPrimary } from '@components/index';
import { Form } from 'react-bootstrap';
import './style.css';
import { Link } from 'react-router-dom';

function Landing() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [seePass, setSeePass] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className='wrapper'>
      <CardPrimary
        title={<h1>BugTracker</h1>}
        className='login'
        footer={
          <p>
            Need an Account?<Link to='/signup'> Sign up.</Link>
          </p>
        }
      >
        <Form onSubmit={handleSubmit}>
          <Field
            type='text'
            label='Username or Email'
            value={user}
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <InputGroupPrimary
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

          <ButtonPrimary type='submit'>Login</ButtonPrimary>
        </Form>
      </CardPrimary>
    </div>
  );
}

export default Landing;
