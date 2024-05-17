//packages
import { Routes, Route } from "react-router-dom";

//pages
import LandingPage from "./pages/LandingPage";

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element= { <LandingPage /> } />
      </Routes>
    </div>
  )
}

export default App
