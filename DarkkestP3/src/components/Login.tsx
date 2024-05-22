import React, { useRef, useState } from 'react';
import { useAuth } from '../context/AuthContext'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const successRef = useRef() as any;
  
  const {loginUser} = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: '',
    password: ''
  });
  const [button, setButton] = useState(true);
  const [success, setSuccess] = useState(true);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add login logic here
    const username : string = form.username;
    const password : string = form.password;
    if(!username || !password){
      console.log("Inputs are empty!")
      return;
    }
    setButton(false);

    let res = await loginUser(username, password);

    if(res && res.ok){
      navigate('/pro');
    }
    else{
      setSuccess(false);
    }
    setButton(true);
    return;    
  };

  return (
    <section id="loginBox">
      <h1 style={{textAlign: "center"}}>Login</h1>
      <div>
        <p ref={successRef} className={!success ? "errmsg" : "offscreen"} aria-live="assertive">Login Failed!</p>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username:                
        </label>
        <div>
          <input 
            id="username"
            type="username" 
            name="username" 
            value={form.username} 
            onChange={handleChange} 
            //placeholder="Username" 
          />
        </div>
        
        <label htmlFor="password">
          Password:                
        </label>
        <div>
          <input 
            id="password" 
            type="password" 
            name="password" 
            value={form.password} 
            onChange={handleChange} 
            //placeholder="Password" 
          />
        </div>      
        <button disabled={!button} type="submit">Login</button>
      </form>
    </section>
  );
};

export default Login;
