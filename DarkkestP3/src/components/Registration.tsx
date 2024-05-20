import { useRef, useState, useEffect, RefObject } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-._@+]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Registration = () => {
    const userRef = useRef() as any;
    const errRef = useRef() as any;

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
      userRef.current.focus();
    }, [])

    useEffect(() => {
      const result = USER_REGEX.test(user)
      console.log(result);
      console.log(user);
      setValidName(result);
    }, [user])

    useEffect(() => {
        const result = PWD_REGEX.test(pwd)
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match = (pwd === matchPwd);
        setValidMatch(match);
      }, [pwd, matchPwd])

      useEffect(() => {
        setErrMsg('');
      }, [user, pwd, matchPwd])    

  return (
    <section className="center">
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        <h1>Register</h1>
        <form className="registrationForm">
            <label htmlFor="username">
                Username:
                <span className={validName ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck} />
                </span>
                <span className={validName || !user ? "hide" : "invalid"}>
                    <FontAwesomeIcon icon={faTimes} />
                </span>
            </label>
            <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                required
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
            />
            <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                4 to 24 characters.<br />
                Must begine with a letter.<br />
                Letter, numbersm underscores, hyphens allowed.
            </p>
        </form>
        <img src="https://www.cameronsworld.net/img/content/2/28.gif" alt="UFO" />
        <img src="https://i.imgur.com/6kWv7kZ.gif" alt="DBZ" />
    </section>
  )
}

export default Registration