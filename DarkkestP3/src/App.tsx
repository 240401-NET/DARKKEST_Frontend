import { AuthProvider } from "./context/AuthContext";

// packages
import { Routes, Route } from "react-router-dom";

// pages
import LandingPage from "./pages/LandingPage";
import AuthPage from "./pages/AuthPage"; // New AuthPage component

function App() {
  return (
    <main className="app">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/landing" element={<LandingPage />} />
        </Routes>
      </AuthProvider>
    </main>
  );
}

export default App;

