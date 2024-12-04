import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/home";
import Navbar from "./components/navbar";
import { About } from "./components/About/about";
import { ProjectPage } from "./components/Projects/project";
import { ContactPage } from "./components/Contact/contact";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<ProjectPage />} />
            <Route path="/Contact" element={<ContactPage />} />
            {/* <Route path="/calculator" element={<Calculator />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
