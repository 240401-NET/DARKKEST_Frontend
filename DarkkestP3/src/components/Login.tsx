import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { loginUser } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e : any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add login logic here
    loginUser(form.username, form.password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="username" name="username" value={form.username} onChange={handleChange} placeholder="Username" />
      <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
