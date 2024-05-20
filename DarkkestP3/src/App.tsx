import { AuthProvider } from "./context/AuthContext";

//packages
import { Routes, Route } from "react-router-dom";

//pages
import LandingPage from "./pages/LandingPage";
import Registration from "./components/Registration";

function App() {

  return (
    <main className="app">
      <AuthProvider>
        <Routes>
          <Route path="/" element= { <Registration /> } />
        </Routes>        
      </AuthProvider>
    </main>
  )
}

export default App
