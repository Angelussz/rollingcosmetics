import React, { useEffect, useState } from "react";
import TarjetaProducto from "../../iu/componentes/TarjetaProducto";
import { Container, Row, Form, Col } from "react-bootstrap";
import axios from "axios";
import "./estilos/destacados.css"

export const Destacados = () => {
  const API = import.meta.env.VITE_API;
  const [productos5, set5Productos] = useState([]);

  const get5Productos = async () => {
    try {
      let URL = `${API}/productos?limite=5`;
      const respuesta = await axios.get(URL);
      set5Productos(respuesta.data);
    } catch (error) {
      console.error("ERROR ---> ", error);
    }
  }

  useEffect(() => {
    get5Productos();
    return () => {
      set5Productos([]);
    }
  }, []);

  return (
    <>
      <div>
        <div>
          <img src="../../../public/imagenes/BannerProductosDestacados.png" className="d-block w-100" alt="Imagen de ofertas de productos destacados" />
        </div>
        <Container className="my-3">
          <div className="fondoSecundario fondoSecundarioBusqueda py-2 my-3" style={{ borderRadius: "10px" }}>
            <h1 className="text-center"> RollingCosmetic </h1>
            <div className="ms-3">
              <h2>Productos Destacados</h2>
              <p>Conoce más sobre nuestros productos destacados.</p>
            </div>
          </div>
          <Row className="centrarTarjetas">
            {productos5.map((producto) => {
              return <TarjetaProducto producto={producto} key={producto._id} />;
            })}
          </Row>
        </Container>
      </div>
    </>
  )
}
