import { NavLink } from "react-router-dom";
import Logo from "../assets/LogoD.png";

const LandingPage = () => {
  return (
    <>
      <div>
        <h1>Wecome To The Community</h1>
      </div>
      <div>
        <NavLink to="/auth">
          <button>Login/Register</button>
        </NavLink>
      </div>

      <div
        className="Logo"
        style={{
          backgroundImage: `url(${Logo})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          opacity: ".8",
          height: "500px",
          width: "500px",
        }}
      >
        {Logo}
      </div>
    </>
  );
};

export default LandingPage;
