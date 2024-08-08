import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../styles/login.css';

export default function Login() {
  const navigate = useNavigate(); 
  const [log, setLog] = useState({ firstname: "", lastname: '', email: '', phn: '' });

  const changeHandler = (e) => {
    setLog({ ...log, [e.target.id]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(log));
    console.log('User information stored:', log);
    setLog({ firstname: "", lastname: '', email: '', phn: '' }); 
    navigate('/'); 
  };

  return (
    <div className='login-page'>
      <div className='login-form'>
        <h2>Login</h2>
        <form onSubmit={submitHandler}>
          <div className='form-group'>
            <label>First Name</label>
            <input type='text' id='firstname' value={log.firstname} onChange={changeHandler}  required/>
          </div>
          <div className='form-group'>
            <label>Last Name</label>
            <input type='text' id='lastname' value={log.lastname} onChange={changeHandler} required/>
          </div>
          <div className='form-group'>
            <label>Email</label>
            <input type='text' id='email' value={log.email} onChange={changeHandler} required/>
          </div>
          <div className='form-group'>
            <label>Phone</label>
            <input type='text' id='phn' value={log.phn} onChange={changeHandler} required/>
          </div>
          <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  );
}
