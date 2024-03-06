import React from "react";
import "../stylesheets/Promos.css";
import imgPromo1 from "../images/promo_1.png";
import imgPromo2 from "../images/promo_2.png";

export default function Promos () {
  return (
    <div className="contenedor-promos">
      <div className="contenedor-promos-principal">
        <h1>CONOCÉ NUESTRAS <strong>PROMOS</strong></h1>
      </div>
      <div className="contenedor-promos-secundario">
        <img src={imgPromo1} draggable="false" />
        <img src={imgPromo2} draggable="false" />
      </div>
    </div>
  );
};