import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router-dom";
import axios from "axios";
import ImagenProductos from "../../../public/imagenes/productos_belleza.webp";
import TarjetaProducto from "../../iu/componentes/TarjetaProducto";
import Spinner from "react-bootstrap/Spinner";
export const Busqueda = () => {
  const API = import.meta.env.VITE_API_BACK;
  const { busqueda } = useParams();
  const [productos, setProductos] = useState([]);
  const getProductos = async () => {
    try {
      const respuesta = await axios.get(
        `${API}/productos?busqueda=${busqueda}`
      );
      console.log("RESPONSE AXIOS -->", respuesta);
      // const produc = response.data;
      setProductos(respuesta.data);
    } catch (error) {
      console.log("ERROR -->", error);
    }
  };
  useEffect(() => {
    getProductos();

    return () => {
      setProductos([]);
    };
  }, []);

  return (
    <>
      <img
        src={ImagenProductos}
        alt="Imagen de productos referencial"
        className="img-fluid"
      />
      {productos.length > 0 ? (
        <Container className="my-3">
          <h1>Busqueda</h1>
          <p>
            Productos relacionados a{" "}
            <span style={{ fontWeight: "bold" }}> {busqueda}</span>:
          </p>
          <Row>
            {productos.map((producto) => {
              return <TarjetaProducto producto={producto} key={producto._id} />;
            })}
          </Row>
        </Container>
      ) : (
        <div className="mt-4 text-center">
          <h2>Cargando productos:</h2> 
          <Spinner  animation="border" />
        </div>
      )}
      {/* <code>{JSON.stringify(productos)}</code> */}
    </>
  );
};
