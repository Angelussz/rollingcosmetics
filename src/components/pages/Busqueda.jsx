import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router-dom";
import axios from "axios";
import ImagenProductos from "../../../public/imagenes/rollingCosmeticsLogo.png";
import TarjetaProducto from "../../iu/componentes/TarjetaProducto";
import Spinner from "react-bootstrap/Spinner";
import "./estilos/busqueda.css"

export const Busqueda = () => {
  const API = import.meta.env.VITE_API;
  const { busqueda } = useParams();
  const [productos, setProductos] = useState([]);
  const getProductos = async () => {
    try {
      const respuesta = await axios.get(
        `${API}/productos?busqueda=${busqueda}`
      );
      setProductos(respuesta.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getProductos();

    return () => {
      setProductos([]);
    };
  }, [busqueda]);

  return (
    <>
      {productos.length > 0 ? (
        <Container className="my-3">
          <div className="fondoSecundario fondoSecundarioBusqueda py-2 my-3" style={{ borderRadius: "10px" }}>
            <h1 className="text-center"> RollingCosmetic </h1>
            <div className="ms-3">
              <h2>Búsqueda Relacionada</h2>
              <p>Productos relacionados a{" "} <span className="textoBusqueda"> {busqueda}</span>:</p>
            </div>
          </div>
          <Row className="centrarTarjetas">
            {productos.map((producto) => {
              return <TarjetaProducto producto={producto} key={producto._id} />;
            })}
          </Row>
        </Container>
      ) : (
        <div className="mt-4 text-center">
          <h2>Cargando productos:</h2>
          <Spinner animation="border" />
        </div>
      )}
    </>
  );
};
