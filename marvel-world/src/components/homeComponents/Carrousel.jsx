import React, { useState, useEffect } from "react";
import ImagCarrusel1 from "../../assests/Images/carrusel1.jpg";
import ImagCarrusel2 from "../../assests/Images/carrusel2.jpg";
import ImagCarrusel3 from "../../assests/Images/carrusel3.jpg";
import ImagCarrusel4 from "../../assests/Images/carrusel4.jpg";
import ImagCarrusel5 from "../../assests/Images/carrusel5.jpg";
import ImagCarrusel6 from "../../assests/Images/carrusel6.jpg";
import "../../styles/carruselStyles.css";
const Carrousel = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <section>
      <img src={ImagCarrusel1} alt="" />
      <img src={ImagCarrusel2} alt="" />
      {screenWidth > 500 && <img src={ImagCarrusel3} alt="" />}
      {screenWidth > 700 && <img src={ImagCarrusel4} alt="" />}
      {screenWidth > 900 && <img src={ImagCarrusel5} alt="" />}
      {screenWidth > 1100 && <img src={ImagCarrusel6} alt="" />}
    </section>
  );
};

export default Carrousel;
