import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import './Login.css'
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log(data); // assuming the server returns JSON data
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="login-main-container">
      <div className="login-blur-container">
        <h1 className="login-title">Login</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label id='login-subheading'>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label id='login-subheading'>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Button type="submit" className='login-btn'> Login</Button>
          <Button type="submit" className='login-btn'> Google</Button>
          <div className='signup-bottom-text'>
            <p>
              Don't have an account? <Link to="/">Signup here</Link>
            </p>
          </div>
        </Form>
      </div>
    </div >
  );
};

export default LoginPage;
