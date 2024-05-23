import React, { useRef, useState, useEffect } from 'react';
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuth } from '../context/AuthContext';
import { SelectedAuthForm } from '../shared/types';

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-._@+]{3,23}$/;
const EMAIL_REGEX = /^.+@.+\..+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

type RegistrationFormProps = {
  setSelectedAuthForm: (value: SelectedAuthForm) => void;
};

const Registration = ({ setSelectedAuthForm }: RegistrationFormProps) => {
  const { register } = useAuth();
  const userRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<HTMLParagraphElement>(null);
  const successRef = useRef<HTMLParagraphElement>(null);

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const [button, setButton] = useState(true);

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setButton(false);
    setSuccess(false);
    setErrMsg('');
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg('Invalid Entry');
      return;
    }

    try {
      let res = await register(user, email, pwd);
      if (res.ok) {
        setSuccess(true);
        console.log('Success!!!');
      }
    } catch (error: any) {
      console.error(error);
      setErrMsg(error.message);
    } finally {
      setButton(true);
    }
  };

  const handleLoginRedirect = () => {
    setSelectedAuthForm(SelectedAuthForm.Login);
  };

  return (
    <section className="flex items-center justify-center min-h-screen px-4 md:px-0 pt-24 w-full">
      <div
        className="w-full max-w-2xl p-8 space-y-4 bg-white shadow-md rounded-lg"
        style={{ fontFamily: 'Lato, sans-serif' }}
      >
        <h1
          className="text-3xl md:text-5xl font-bold text-center"
          style={{ fontWeight: 400 }}
        >
          Register
        </h1>
        <div>
          <p
            ref={errRef}
            className={
              errMsg
                ? 'p-4 text-center text-red-500 bg-red-100 border border-red-400 rounded'
                : 'hidden'
            }
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <p
            ref={successRef}
            className={
              success
                ? 'p-4 text-center text-green-500 bg-green-100 border border-green-400 rounded'
                : 'hidden'
            }
            aria-live="assertive"
          >
            Account Registered!
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-lg font-medium text-gray-700"
            >
              Username:
            </label>
            <div className="relative">
              <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                required
                aria-invalid={validName ? 'false' : 'true'}
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                className="w-full p-3 mt-1 border rounded-md"
              />
              <span
                className={`absolute top-3 right-3 ${validName ? 'text-green-500' : 'text-red-500'} ${user ? '' : 'hidden'}`}
              >
                <FontAwesomeIcon icon={validName ? faCheck : faTimes} />
              </span>
            </div>
            <p
              id="uidnote"
              className={
                userFocus && user && !validName
                  ? 'text-xs text-gray-700 mt-2'
                  : 'hidden'
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              4 to 24 characters.
              <br />
              Must begin with a letter.
              <br />
              Letters, numbers, underscores, hyphens allowed.
            </p>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700"
            >
              Email:
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-invalid={validEmail ? 'false' : 'true'}
                aria-describedby="emailnote"
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
                className="w-full p-3 mt-1 border rounded-md"
              />
              <span
                className={`absolute top-3 right-3 ${validEmail ? 'text-green-500' : 'text-red-500'} ${email ? '' : 'hidden'}`}
              >
                <FontAwesomeIcon icon={validEmail ? faCheck : faTimes} />
              </span>
            </div>
            <p
              id="emailnote"
              className={
                emailFocus && email && !validEmail
                  ? 'text-xs text-gray-700 mt-2'
                  : 'hidden'
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Proper email format eg. sample@email.com.
            </p>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-lg font-medium text-gray-700"
            >
              Password:
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                required
                aria-invalid={validPwd ? 'false' : 'true'}
                aria-describedby="pwdnote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
                className="w-full p-3 mt-1 border rounded-md"
              />
              <span
                className={`absolute top-3 right-3 ${validPwd ? 'text-green-500' : 'text-red-500'} ${pwd ? '' : 'hidden'}`}
              >
                <FontAwesomeIcon icon={validPwd ? faCheck : faTimes} />
              </span>
            </div>
            <p
              id="pwdnote"
              className={
                pwdFocus && !validPwd ? 'text-xs text-gray-700 mt-2' : 'hidden'
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              8 to 24 characters.
              <br />
              Must include uppercase and lowercase letters, a number, and a
              special character.
              <br />
              Allowed special characters:
              <span aria-label="exclamation mark">!</span>
              <span aria-label="at symbol">@</span>
              <span aria-label="hashtag">#</span>
              <span aria-label="dollar sign">$</span>
              <span aria-label="percent sign">%</span>
            </p>
          </div>

          <div>
            <label
              htmlFor="confirm_pwd"
              className="block text-lg font-medium text-gray-700"
            >
              Confirm Password:
            </label>
            <div className="relative">
              <input
                type="password"
                id="confirm_pwd"
                onChange={(e) => setMatchPwd(e.target.value)}
                value={matchPwd}
                required
                aria-invalid={validMatch ? 'false' : 'true'}
                aria-describedby="confirmnote"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
                className="w-full p-3 mt-1 border rounded-md"
              />
              <span
                className={`absolute top-3 right-3 ${validMatch ? 'text-green-500' : 'text-red-500'} ${matchPwd ? '' : 'hidden'}`}
              >
                <FontAwesomeIcon icon={validMatch ? faCheck : faTimes} />
              </span>
            </div>
            <p
              id="confirmnote"
              className={
                matchFocus && !validMatch
                  ? 'text-xs text-gray-700 mt-2'
                  : 'hidden'
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Must match the first password input field.
            </p>
          </div>

          <button
            disabled={
              !validName || !validEmail || !validPwd || !validMatch || !button
            }
            type="submit"
            className="w-full px-4 py-2 text-lg text-white bg-primary-green rounded-md hover:bg-green-700"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center">
          <p className="text-lg text-gray-600">
            Already have an account?{' '}
            <span
              onClick={handleLoginRedirect}
              className="text-blue-600 cursor-pointer hover:underline"
            >
              Log In
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Registration;
