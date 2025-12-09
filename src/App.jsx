import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>

      <Footer />
    </>
  );
}
