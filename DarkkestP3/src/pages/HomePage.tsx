import { useEffect } from "react";
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const {isLoggedIn, logoutUser, user} = useAuth();    
    const navigate = useNavigate();

    useEffect(() => {
      if(!isLoggedIn()) navigate("/")
    },)

    return(
        <>
            <section id="homepage">
                <header id="homeheader">Welcome {user}
                    <div id="buttondiv">
                        <button id="logoutbutton">Logout</button>
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