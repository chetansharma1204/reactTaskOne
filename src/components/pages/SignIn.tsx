import React, { ReactElement, useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import {  toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";


const SignIn = ():ReactElement => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>):void => {
    event.preventDefault();
  };

  const logIn = ():void => {
    axios.post(
      "http://localhost:9000/api/auth/log-in",
      {
        email: email,
        password: password,
      }
    ).then(response => {
      if (response.data.code === 200) {
        toast.success(response.data.message);
        setTimeout(():void =>navigate('/home'),2000)
      } 
    }).catch(error => toast.error('Invalid Email or Password'))
  }

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
        <button type="submit" onClick={logIn} className="btn btn-primary">
          Sign In
        </button>
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
