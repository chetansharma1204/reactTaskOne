import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {  toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";


const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const register =  () => {
    axios.post(
      "http://localhost:9000/api/auth/register",
      {
        fname: firstName,
        lname: lastName,
        email: email,
        password: password,
      }
    ).then(response => {
      if (response.data.code === 201) {
        toast.success(response.data.message);
        setTimeout(()=>navigate('/'),2000)
      } 
    }).catch(error => toast.error('Email already exist'))
  };

  return (
    <div className="container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            required
          />
        </div>
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
        <button type="submit" onClick={register} className="btn btn-primary">
          Sign Up
        </button>
      </form>
      <label htmlFor="a" className="form-label">
        Already have account ?
      </label>{" "}
      <Link to="/">
        <button className="btn btn-info">Log in</button>
      </Link>
    </div>
  );
};

export default SignUp;
