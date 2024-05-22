import { useEffect } from "react";
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const {isLoggedIn, logoutUser, user} = useAuth();    
    const navigate = useNavigate();

    useEffect(() => {
      if(!isLoggedIn()) navigate("/")
    },)

    const handleLogout = (e :  React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        logoutUser();
    }

    const handleLanding = (e :  React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        navigate("/landing");
    }

    return(
        <>
            <section id="homepage">
                <header id="homeheader">Welcome {user}
                    <div id="buttondiv">
                        <button id="logoutbutton" onClick={handleLogout}>Logout</button>
                        <button onClick={handleLanding}>Landing</button>
                    </div>
                </header>
                <div style={{width: "100%"}}>    
                    <aside id="hpaside">Profile</aside>
                    <main id="applications">Applications</main>
                    <main id="opportunities">Opportunities</main>
                </div>       
            </section>
        </>
    );
}
export default HomePage;