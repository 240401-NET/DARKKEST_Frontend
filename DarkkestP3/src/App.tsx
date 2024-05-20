//packages
import { Routes, Route } from "react-router-dom";

//pages
import LandingPage from "./pages/LandingPage";
import Registration from "./components/Registration";

function App() {

  return (
    <main className="app">
      <Routes>
        <Route path="/" element= { <Registration /> } />
      </Routes>
    </main>
  )
}

export default App
