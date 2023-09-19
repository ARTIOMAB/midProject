import "./App.css";
import HomePage from "./Pages/HomePage";
import NavBar from "./components/NavBar";
import Contact from "./Pages/Contact";
import Pricing from "./Components/Pricing";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="Pricing/" element={<Pricing />} />
          <Route path="Contact/" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
