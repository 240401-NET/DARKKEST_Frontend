import React, { useRef, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { SelectedAuthForm } from '../shared/types';
import { useNavigate } from 'react-router-dom';

type LoginFormProps = {
  setSelectedAuthForm: (value: SelectedAuthForm) => void;
};

const Login = ({ setSelectedAuthForm }: LoginFormProps) => {
  const successRef = useRef<HTMLParagraphElement>(null);
  const navigate = useNavigate();
  const { loginUser } = useAuth();

  const [form, setForm] = useState({
    username: '',
    password: '',
  });
  const [button, setButton] = useState(true);
  const [success, setSuccess] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, password } = form;

    if (!username || !password) {
      setErrorMessage('Username and Password cannot be empty!');
      setSuccess(false);
      return;
    }

    setButton(false);

    let res = await loginUser(username, password);

    if (res && res.ok) {
      // Navigate to a different page if login is successful
      navigate('/landing');
    } else {
      setErrorMessage('Login Failed!');
      setSuccess(false);
    }
    setButton(true);
  };

  const handleRegisterRedirect = () => {
    setSelectedAuthForm(SelectedAuthForm.Register);
  };

  return (
    <section className="flex items-center justify-center min-h-screen px-4 md:px-0 pt-24 w-full">
      <div
        className="w-full max-w-2xl p-10 space-y-8 bg-white shadow-md rounded-lg"
        style={{ fontFamily: 'Lato, sans-serif' }}
      >
        <h1
          className="text-5xl font-bold text-center"
          style={{ fontWeight: 400 }}
        >
          Log In
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-lg font-medium text-gray-700"
            >
              Username:
            </label>
            <input
              id="username"
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              className="w-full p-3 mt-1 border rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-lg font-medium text-gray-700"
            >
              Password:
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full p-3 mt-1 border rounded-md"
            />
          </div>
          {!success && (
            <div className="p-4 text-center text-red-500 bg-red-100 border border-red-400 rounded">
              <p ref={successRef} aria-live="assertive">
                {errorMessage}
              </p>
            </div>
          )}
          <button
            disabled={!button}
            type="submit"
            className="w-full px-4 py-2 text-lg text-white bg-primary-green rounded-md hover:bg-green-700"
          >
            Log In
          </button>
        </form>
        <div className="text-center">
          <p className="text-lg text-gray-600">
            Don't have an account?{' '}
            <span
              onClick={handleRegisterRedirect}
              className="text-blue-600 cursor-pointer hover:underline"
            >
              Become a Volunteer
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
