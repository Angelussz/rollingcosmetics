import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import iconoFacebook from "../../public/imagenes/facebookicon.png";
import iconoInstagram from "../../public/imagenes/instagramicon.png";
import iconoTwitter from "../../public/imagenes/twitterxicon.png";
import logoApp from "../../public/imagenes/rollingCosmeticsLogo2.png";
import { IoSearchSharp } from "react-icons/io5";

import "./estilos/encabezado.css";
import { ModalBusqueda } from "./componentes/ModalBusqueda";
import { Link } from "react-router-dom";
export const Encabezado = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <header className="d-flex justify-content-between align-items-center gradiente px-3 h-5">
      <section className="flex-sm-grow-1">
        <img src={iconoFacebook} alt="Icono de facebook" className="t-links" />
        <img src={iconoInstagram} alt="Icono de facebook" className="t-links" />
        <img src={iconoTwitter} alt="Icono de facebook" className="t-links" />
      </section>
      <section className="flex-sm-grow-1">
        <Link to={"/"}>
          <img src={logoApp} alt="Logo RollingCosmetics" className="t-logo" />
        </Link>
      </section>
      <section className="flex-sm-grow-2">
        <Button variant="secondary" onClick={handleShow}>
          <IoSearchSharp />
        </Button>
      </section>
      <ModalBusqueda show={show} handleClose={handleClose} />
    </header>
  );
};
