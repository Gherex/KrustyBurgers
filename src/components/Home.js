import React, { useState, useRef } from "react";
import "../stylesheets/Home.css";
import imgBurger from "../images/hamburguesa_6.jpg";
import imgWeMakeGreatBurgers from "../images/presentacion_3.jpg";
import imgPresentacionBurger from "../images/presentacion_1.jpg";
import galeria1 from "../images/galeria_1.jpg";
import galeria2 from "../images/galeria_2.jpg";
import galeria3 from "../images/galeria_3.jpg";
import galeria4 from "../images/galeria_4.jpg";
import galeria5 from "../images/galeria_5.jpg";
import galeria6 from "../images/galeria_6.jpg";
import galeria7 from "../images/galeria_7.jpg";
import galeria8 from "../images/galeria_8.jpg";
import galeria9 from "../images/galeria_9.jpg";
import galeria10 from "../images/galeria_10.jpg";
import galeria11 from "../images/galeria_11.jpg";
import galeria12 from "../images/galeria_12.jpg";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

export default function Home() {
  function abrirWhatsApp() {
    const telefono = "123456789";
    const mensaje = "Hola, ¿cómo estás? Quisiera encargar una Krusty Burger!";
    const link =
      "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje);
    window.open(link); //Lo abro en una pestaña nueva
  }

  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(null);
  const carruselRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - carruselRef.current.offsetLeft);
    setScrollLeft(carruselRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carruselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Ajusta la sensibilidad del desplazamiento aquí
    carruselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <>
      <main className="contenedor-home">
        <div className="contenedor-principal">
          <h1>20% OFF EN TAKE AWAY</h1>
          <h2>TODOS LOS MEDIOS DE PAGO</h2>
          <button className="btn-especial" onClick={abrirWhatsApp}>
            QUIERO <FaArrowRight />
          </button>
        </div>
      </main>
      <div className="contenedor-secundario">
        <article className="contenedor-amarillo">
          <h2>CONOCÉ NUESTRO MENÚ</h2>
          <h1>WE MAKE BURGERS</h1>
          <p>
            Nuestras burgers están hechas con carne 100% Angus, con pan casero
            que horneamos todos los días y una selección de ingredientes que las
            hacen únicas. Incluyen papas o una ensaladita de mix de hojas
            verdes.
          </p>
          <button>
            VER LA CARTA <FaArrowRight />
          </button>
        </article>
        <img
          src={imgBurger}
          alt="Fotografía de una de nuestas hamburguesas con pan negro"
          draggable="false"
        />
      </div>
      <div className="contenedor-galeria">
        <h1>#ENJOYKRUSTY</h1>
        <div
          ref={carruselRef}
          className="carrusel"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <img className="fotografia" src={galeria1} draggable="false" />
          <img className="fotografia" src={galeria2} draggable="false" />
          <img className="fotografia" src={galeria3} draggable="false" />
          <img className="fotografia" src={galeria4} draggable="false" />
          <img className="fotografia" src={galeria5} draggable="false" />
          <img className="fotografia" src={galeria6} draggable="false" />
          <img className="fotografia" src={galeria7} draggable="false" />
          <img className="fotografia" src={galeria8} draggable="false" />
          <img className="fotografia" src={galeria9} draggable="false" />
          <img className="fotografia" src={galeria10} draggable="false" />
          <img className="fotografia" src={galeria11} draggable="false" />
          <img className="fotografia" src={galeria12} draggable="false" />
        </div>
        <h2>
          <FaArrowLeft /> Deslizá <FaArrowRight />
        </h2>
      </div>
      <div className="contenedor-secundario">
        <article className="contenedor-amarillo">
          <h2>SOMOS KRUSTY</h2>
          <h1>SOMOS KRUSTY ROCKS</h1>
          <p>
            Ser Rockero no es solo escuchar rock, es mucho más que eso. Es toda
            una actitud frente a la vida y como uno se para frente a su entorno.
            No estancarse. Salir siempre de la zona de confort. La famosa
            “Actitud Rock”, Rock como forma de vida. Soy Rock. Soy Krusty Rocks.
          </p>
          <button>
            SOBRE NOSOTROS <FaArrowRight />
          </button>
        </article>
        <img
          src={imgPresentacionBurger}
          alt="Fotografía de una de nuestas hamburguesas con pan negro"
          draggable="false"
        />
      </div>
      <div className="contenedor-redes">
        <h1>SEGUINOS EN REDES</h1>
        <a href="https://facebook.com/" target="_blank"><FaFacebookSquare /></a>
        <a href="https://instagram.com/" target="_blank"><FaInstagram /></a>
        <a href="https://x.com/" target="_blank"><FaSquareTwitter /></a>
      </div>
      <div className="contenedor-imagen-con-texto">
        <img src={imgWeMakeGreatBurgers} draggable="false" />
        <h1>WE MAKE<br />GREAT BURGERS</h1>
      </div>
    </>
  );
}
