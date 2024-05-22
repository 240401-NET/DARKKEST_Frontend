import { NavLink } from "react-router-dom";
import Logo from "../assets/LogoD.png";

const LandingPage = () => {
  return (
    <>
      <div
        className="Logo"
        style={{
          backgroundImage: `url(${Logo})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          opacity: ".65",
          height: "540px",
          width: "570px",
          margin: "30px",
        }}
      ></div>
      <div className="titles">Wecome To The Community</div>
    </>
  );
};

export default LandingPage;
