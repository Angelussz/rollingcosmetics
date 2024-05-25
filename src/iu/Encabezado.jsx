import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import iconoFacebook from "/imagenes/facebookicon.png";
import iconoInstagram from "/imagenes/instagramicon.png";
import iconoTwitter from "/imagenes/twitterxicon.png";
import logoApp from "/imagenes/rollingCosmeticsLogo2.png";
import { IoSearchSharp } from "react-icons/io5";

import "./estilos/encabezado.css";
import { ModalBusqueda } from "./componentes/ModalBusqueda";
import { Link } from "react-router-dom";
export const Encabezado = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <section className="d-flex justify-content-between align-items-center gradiente px-3 h-5">
      <section className="flex-sm-grow-1">
        <a href="https://www.facebook.com/">
          <img src={iconoFacebook} alt="Icono de facebook" className="t-links" />
        </a>
        <a href="https://www.instagram.com/">
          <img src={iconoInstagram} alt="Icono de instagram" className="t-links" />
        </a>
        <a href="https://x.com/">
          <img src={iconoTwitter} alt="Icono de Twitter" className="t-links" />
        </a>
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
    </section>
  );
};
