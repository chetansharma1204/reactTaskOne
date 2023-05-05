import React, { useState } from 'react';
import { Link } from "react-router-dom";


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="container">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <Link to='/home'>
        <button type="submit" className="btn btn-primary">
          Sign In
        </button>
        </Link>
        <br />

        
      </form>
      <label htmlFor="a" className="form-label">
            Don't have account ?
        </label>{' '} {' '}
        <Link to='/sign-up'>
        <button  className="btn btn-info">
          Create account
        </button>
        </Link>
    </div>
  );
};

export default SignIn;
