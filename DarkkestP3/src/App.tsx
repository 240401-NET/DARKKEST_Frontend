import { AuthProvider } from "./context/AuthContext";
// packages
import { Routes, Route } from "react-router-dom";
// pages
import LandingPage from "./pages/LandingPage";
import AuthPage from "./pages/AuthPage"; // New AuthPage component
import HomePage from "./pages/HomePage";
import ViewOpportunitiesPage from "./pages/ViewOpportunitiesPage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import CreateOpportunitiesPage from "./pages/CreateOpportunityPage.tsx";
import NavBar from "./components/NavBar.tsx";
import ApplicationPage from "./pages/ApplicationPage.tsx";
import { useEffect, useState } from "react";
import { SelectedAuthForm, SelectedPage } from "./shared/types.ts";
import Hero from "./pages/Hero.tsx";
import Profile from "./pages/Profile.tsx";


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [selectedAuthForm, setSelectedAuthForm] = useState<SelectedAuthForm>(SelectedAuthForm.Register);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <AuthProvider>
        <NavBar 
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          setSelectedAuthForm={setSelectedAuthForm}
          isTopOfPage={isTopOfPage}
        />
        <Routes>
          <Route path ="/" element = {<Hero setSelectedAuthForm={setSelectedAuthForm}/>} />
          <Route path="/auth" element={<AuthPage selectedAuthForm={selectedAuthForm} setSelectedAuthForm={setSelectedAuthForm} />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/profile" element={<Profile />} />
          {/*
          <Route path="/opp" element={<ViewOpportunitiesPage />} />
          <Route path="/pro" element={<ProfilePage />} />
          <Route path="/createopp" element={<CreateOpportunitiesPage />} />
          <Route path="/app" element={<ApplicationPage />} />
          <Route path="/home" element={<HomePage />} /> */}
        </Routes>
      </AuthProvider>
    </div>

  );
}

export default App;
