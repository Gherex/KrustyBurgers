import React, { useState } from "react";
import "../stylesheets/BarraNav.css";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { FaBars } from "react-icons/fa";
import { IoMdFlash } from "react-icons/io";

export default function BarraNav() {
  const [desplegado, setDesplegado] = useState(false);

  function desplegarMenu() {
    setDesplegado(!desplegado);
  }

  return (
    <>
      <nav className="contenedor-nav">
        <ul>
          <li><Link to="/" className="texto-nav">Home</Link></li>
          <li><Link to="/nosotros" className="texto-nav">Nosotros</Link></li>
          <li><Link to="/menu" className="texto-nav">Menu</Link></li>
          <li><Link to="/"><img className="logo" src={Logo} draggable="false" /></Link></li>
          <li><Link to="/promos" className="texto-nav">Promos</Link></li>
          <li><Link to="/galeria" className="texto-nav">Galería</Link></li>
          <li><a href="https://www.pedidosya.com.ar/" target="_blank" className="texto-nav btn-especial">Delivery <IoMdFlash className="ico-rayo" /></a></li>
        </ul>
      </nav>
      <nav className="nav-responsive">
        <div className="full-width">
          <Link to="/"><img className="logo" src={Logo} draggable="false" alt="Logo" /></Link>
          <FaBars className="texto-nav barra" onClick={desplegarMenu} />
        </div>
        <ul className={`desplegable ${desplegado? 'show' : ''}`}>
          <li><Link to="/" className="texto-nav">Home</Link></li>
          <li><Link to="/nosotros" className="texto-nav">Nosotros</Link></li>
          <li><Link to="/menu" className="texto-nav">Menu</Link></li>
          <li><Link to="/promos" className="texto-nav">Promos</Link></li>
          <li><Link to="/galeria" className="texto-nav">Galería</Link></li>
          <li><a href="https://www.pedidosya.com.ar/" target="_blank" className="texto-nav btn-especial">Delivery <IoMdFlash className="ico-rayo" /></a></li>
        </ul>
      </nav>
    </>
  );
}
