import React from "react";
import "../stylesheets/Nosotros.css";
import imgCervezaKrusty from "../images/sobre_nosotros_cerveza.jpeg";

export default function Nosotros() {
  return (
    <div className="contenedor-nosotros">
      <div className="nosotros-principal">
        <h1>SOBRE NOSOTROS</h1>
        <img src={imgCervezaKrusty} draggable="false" />
      </div>
      <div className="nosotros-secundario">
        <h1>SOBRE NOSOTROS</h1>
        <p>
          Somos una hamburguesería con ganas de hacer las cosas de manera
          diferente. En Krusty vas a encontrar lugares descontracturados, buena
          música, buena onda y hamburguesas increíbles. Nuestras cocinas están
          siempre a la vista para que puedas ver el proceso de todo lo que
          comés. ¡Queremos que te sientas como en tu casa!<br /><br />Tenemos un fuerte
          compromiso con las comunidades que nos rodean, impulsamos productores
          y artistas locales. También nos involucramos con nuestro
          medioambiente, y estamos en camino a reducir a cero el uso de
          plástico.<br /><br />Esperamos que disfrutes la experiencia de Krusty, tanto en
          salón como en delivery, al igual que nosotros disfrutamos de armar
          este emprendimiento entre amigos.
        </p>
      </div>
    </div>
  );
}
