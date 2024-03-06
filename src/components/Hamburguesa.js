import React from "react";

export default function Hamburguesa ( {imagen, titulo, descripcion} ) {
  return (
    <div className="contenedor-hamburguesa">
      <img src={imagen} draggable="false" />
      <h1>{titulo}</h1>
      <p>{descripcion}</p>
    </div>
  );
};