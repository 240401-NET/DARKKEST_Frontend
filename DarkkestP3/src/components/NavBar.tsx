import { NavLink } from "react-router-dom";
import "./NavBar.css";

// import { Link } from "react-router-dom";
const NavBar = () => {
  // const flexBetween = "flex items-center justify-between";
  return (
    <nav id="navbar" className="flexbetween">
      <ul>
        <li className="navitem">
          <NavLink to="/auth">Register</NavLink>
        </li>
        <li className="navitem">
          <NavLink to="/auth">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
