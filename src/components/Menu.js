import React from "react";
import "../stylesheets/Menu.css";
import Hamburguesa from "../components/Hamburguesa";
import Burger1 from "../images/hamburguesa_1.jpg";
import Burger2 from "../images/hamburguesa_2.jpg";
import Burger3 from "../images/hamburguesa_3.jpg";
import Burger4 from "../images/hamburguesa_4.jpg";
import Burger5 from "../images/hamburguesa_5.jpg";
import Burger6 from "../images/hamburguesa_6.jpg";

export default function Menu() {
  return (
    <div className="contenedor-menu">
      <div className="menu-presentacion">
        <h1>NUESTRA CARTA</h1>
        <p>
          Nuestras burgers están hechas con carne 100% aberdeen Angus; con pan casero que horneamos todos los días y una selección de ingredientes que las hacen únicas. Incluyen papas fritas o una ensaladita de hojas verdes.
        </p>
      </div>
      <div className="menu-principal">
        <h1>BURGERS</h1>
        <div className="grid-menu">
          <Hamburguesa imagen={Burger1} titulo="SIMPLE CHEESEBURGER" descripcion="Medallón de carne Angus, queso cheddar, cebolla brunoise y nuestra exquisita salsa Krusty." />
          <Hamburguesa imagen={Burger2} titulo="JIMMY" descripcion="Dos medallones de carne Angus, doble feta de queso cheddar, panceta, pepinillos, cebolla crispy y Ronnie BBQ." />
          <Hamburguesa imagen={Burger3} titulo="AMY" descripcion="Dos medallones de carne Angus, provoleta, rúcula, tomate y mayo chimi." />
          <Hamburguesa imagen={Burger4} titulo="TOBYS" descripcion="Dos medallones de carne Angus, doble queso Atuel, cebolla morada en aros, pimientos asados y salsa ahumada Sandals." />
          <Hamburguesa imagen={Burger5} titulo="SLASH" descripcion="Dos medallones de carne Angus, doble queso Atuel, cebolla caramelizada y salsa picante Emily." />
          <Hamburguesa imagen={Burger6} titulo="TOTO" descripcion="Pan negro, tres medallones de carne Angus, triple queso cheddar, mucha panceta y Krusty BBQ." />
        </div>
      </div>
    </div>
  );
}
