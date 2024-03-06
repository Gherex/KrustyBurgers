import React from "react";
import "../stylesheets/Galeria.css";
import imgBarraKrusty from "../images/barra_bar_with_logo.jpeg";
import Galeria1 from "../images/barra_bar.jpeg";
import Galeria2 from "../images/interior-seccion-1.jpeg";
import Galeria3 from "../images/interior-seccion-2.jpeg";
import Galeria4 from "../images/interior-seccion-3.jpeg";
import Galeria6 from "../images/galeria_1.jpg";
import Galeria7 from "../images/galeria_2.jpg";
import Galeria8 from "../images/galeria_3.jpg";
import Galeria9 from "../images/galeria_4.jpg";
import Galeria10 from "../images/galeria_5.jpg";
import Galeria11 from "../images/galeria_6.jpg";
import Galeria12 from "../images/galeria_7.jpg";
import Galeria13 from "../images/galeria_8.jpg";
import Galeria14 from "../images/galeria_9.jpg";
import Galeria15 from "../images/galeria_10.jpg";
import Galeria16 from "../images/galeria_11.jpg";
import Galeria17 from "../images/galeria_12.jpg";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";


export default function Galeria () {
  return (
    <div className="contenedor-vista-galeria">
      <div className="contenedor-principal-galeria">
        <h1>MIRÁ NUESTRA GALERÍA</h1>
        <img src={imgBarraKrusty} draggable="false" />
      </div>
      <div className="contenedor-galeria">
          <h1>#ENJOYKRUSTY</h1>
      </div>
      <div className="contenedor-secundario-galeria">
        <div className="grid-galeria">
          <img src={Galeria1} draggable="false" />
          <img src={Galeria6} draggable="false" />
          <img src={Galeria7} draggable="false" />
          <img src={Galeria8} draggable="false" />
          <img src={Galeria9} draggable="false" />
          <img src={Galeria2} draggable="false" />
          <img src={Galeria10} draggable="false" />
          <img src={Galeria11} draggable="false" />
          <img src={Galeria12} draggable="false" />
          <img src={Galeria13} draggable="false" />
          <img src={Galeria3} draggable="false" />
          <img src={Galeria14} draggable="false" />
          <img src={Galeria15} draggable="false" />
          <img src={Galeria16} draggable="false" />
          <img src={Galeria17} draggable="false" />
          <img src={Galeria4} draggable="false" />
        </div>
        <div className="contenedor-redes">
        <h1>SEGUINOS EN REDES</h1>
        <a href="https://facebook.com/" target="_blank"><FaFacebookSquare /></a>
        <a href="https://instagram.com/" target="_blank"><FaInstagram /></a>
        <a href="https://x.com/" target="_blank"><FaSquareTwitter /></a>
      </div>
      </div>
    </div>
  );
};