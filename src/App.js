import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import BarraNav from "./components/BarraNav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nosotros from "./components/Nosotros";
import Menu from "./components/Menu";
import Promos from "./components/Promos";
import Galeria from "./components/Galeria";

function App() {
  return (
    <Router>
      <div className="App">
        <BarraNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/promos" element={<Promos />} />
          <Route path="/galeria" element={<Galeria />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

