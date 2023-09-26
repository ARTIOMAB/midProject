import "./App.css";
import HomePage from "./Pages/HomePage";
import NavBar from "./components/NavBar";
import Contact from "./Pages/Contact";
import Pricing from "./Pages/Pricing";
import { Routes, Route } from "react-router-dom";
import { DataProvider } from "./DataContext";

function App() {
  return (
    <DataProvider>
      <>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="pricing/" element={<Pricing />} />
            <Route path="Contact/" element={<Contact />} />
          </Routes>
        </div>
      </>
    </DataProvider>
  );
}

export default App;
