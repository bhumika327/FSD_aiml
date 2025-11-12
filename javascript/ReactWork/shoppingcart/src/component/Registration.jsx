import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Registration({ regData }) {  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');  

  function getData(e) {
    e.preventDefault(); 
    const data = { name, email, password };
    regData(data); 
   
  }

  return (
    <div className="container mt-4">
      <h2 style={{ backgroundColor: 'pink', padding: '10px', borderRadius: '10px' }}>
        Registration Form
      </h2>
      <form>
        <div className="form-group mb-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            id="name"
            placeholder="Enter Name"
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="email"
            placeholder="Enter email"
          />
          <small className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>

        <div className="form-check mb-3">
          <input type="checkbox" className="form-check-input" id="check1" />
          <label className="form-check-label" htmlFor="check1">
            Check me out
          </label>
        </div>

        <button type="submit" onClick={getData} className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}

export default Registration;
