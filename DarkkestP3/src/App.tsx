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
import EditProfileForm from "./pages/EditProfilePage.tsx";
import NavBar from "./components/NavBar.tsx";
import ApplicationPage from "./pages/ApplicationPage.tsx";

function App() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <main className="app">
        <AuthProvider>
          <Routes>
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/opp" element={<ViewOpportunitiesPage />} />
            <Route path="/pro" element={<ProfilePage />} />
            <Route path="/createopp" element={<CreateOpportunitiesPage />} />
            <Route path="/edit" element={<EditProfileForm />} />
            <Route path="/app" element={<ApplicationPage />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </AuthProvider>
      </main>
    </>
  );
}

export default App;
