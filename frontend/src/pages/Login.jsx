import React, { useState } from 'react';
import { Form, FormGroup, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/login.css';

import loginImg from '../assets/images/login.png';
import userIcon from '../assets/images/user.png';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleChange = e => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = e => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <section className="auth__section">
      <div className="auth__container">
        <div className="auth__image">
          <img src={loginImg} alt="login illustration" />
        </div>
    
        <div className="auth__form">
          <div className="user__icon">
            <img src={userIcon} alt="user icon" />
          </div>
    
          <h2>Login</h2>
    
          <Form onSubmit={handleClick}>
            <FormGroup>
              <input
                type="email"
                placeholder="Email"
                required
                id="email"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <input
                type="password"
                placeholder="Password"
                required
                id="password"
                onChange={handleChange}
              />
            </FormGroup>
            <Button className="btn auth__btn w-100" type="submit">
              Login
            </Button>
          </Form>
    
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
