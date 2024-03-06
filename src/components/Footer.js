import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import "../stylesheets/Footer.css";

export default function Footer() {

  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="contenedor-footer">
      <div className="footer-principal">
        <div className="item-ppal logo-letras">KRUSTY</div>
        <div className="item-ppal contenedor-locaciones">
          <div className="locacion">
            <h1>PUERTO NORTE</h1>
            <h2>Carballo 178,<br />Rosario</h2>
          </div>
          <div className="locacion">
            <h1>MERCADO ZARPADO</h1>
            <h2>San Luis 1038,<br />Santa Fe</h2>
          </div>
        </div>
        <nav className="item-ppal contenedor-links">
          <ul>
            <h1>NUESTRA WEB</h1>
            <li><Link to="/promos" onClick={handleLinkClick}>Promociones</Link></li>
            <li><Link to="/menu" onClick={handleLinkClick}>Nuestra carta</Link></li>
            <li><Link to="/nosotros" onClick={handleLinkClick}>Nosotros</Link></li>
            <li><Link to="/galeria" onClick={handleLinkClick}>Galería</Link></li>
          </ul>
        </nav>
        <div className="item-ppal contenedor-sumate">
          <h1>SUMATE</h1>
          <p>Si querés formar parte del #TEAMKRUSTY, envia tu CV a gente@grupo94.com.ar</p>
        </div>
      </div>
      <div className="contenedor-footer-secundario">
        <ul className="footer-secundario">
          <li>Krusty 2024 ©</li>
          <li>Todos los derechos reservados</li>
          <li>Seguinos en redes sociales</li>
          <li>
            <ul className="redes-sociales-footer">
              <li><a href="https://facebook.com/" target="_blank"><FaFacebookSquare /></a></li>
              <li><a href="https://instagram.com/" target="_blank"><FaInstagram /></a></li>
              <li><a href="https://x.com/" target="_blank"><FaSquareTwitter /></a></li>
            </ul>
          </li>  
        </ul>
      </div>
    </footer>
  );
}
