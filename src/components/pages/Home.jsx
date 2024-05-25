import { useEffect, useState } from "react";
import { Container, Row, Form } from "react-bootstrap";
import axios from "axios";
import TarjetaProducto from "../../iu/componentes/TarjetaProducto";
import TarjetaProductoSlider from "../../iu/componentes/tarjetaProductoSlider";
import Carousel from 'react-bootstrap/Carousel';
import "../pages/estilos/home.css";
import Slider1 from "../../../public/imagenes/Slider1.png";
import Slider2 from "../../../public/imagenes/Slider2.png";
import Slider3 from "../../../public/imagenes/Slider3.png";

import Publicidad1 from "../../../public/imagenes/Publi1.jpeg";
import Publicidad2 from "../../../public/imagenes/Publi2.png";

export const Home = () => {
  const API = import.meta.env.VITE_API;
  const [productos, setProductos] = useState([]);
  const [filtroProducto, setFiltroProducto] = useState("");
  const [productos3, setProductos3] = useState([]);

  const getProducto = async () => {
    try {
      let URL = `${API}/productos`;
      if (filtroProducto !== "") {
        URL = `${API}/productos?filtro=${filtroProducto}&limite=15`;
      }
      const respuesta = await axios.get(URL);
      setProductos(respuesta.data);
    } catch (error) {
      console.error("ERROR ---> ", error);
    }
  }

  const get3Productos = async () => {
    try {
      let URL = `${API}/productos?limite=3`;
      const respuesta = await axios.get(URL);
      setProductos3(respuesta.data);
    } catch (error) {
      console.error("ERROR ---> ", error);
    }
  }

  useEffect(() => {
    getProducto();
  }, [filtroProducto]);

  useEffect(() => {
    get3Productos();
    return () => {
      setProductos3([]);
    }
  }, []);

  return (
    <div className="fondoPrincipal">
      <div>
        <Carousel variant="dark">
          <Carousel.Item>
            <div>
              <img className="d-block w-100" src={Slider1} alt="imagen" />
              <Carousel.Caption>
                <h2>Productos Destacados</h2>
                <p>¡Mira nuestros productos más recientes al mejor precio!</p>
                <div className="cardContainer">
                  {productos3.map((elemento, indice) => {
                    return (
                      <TarjetaProductoSlider producto={elemento} key={indice} i={3} />
                    )
                  })}
                </div>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div text="Segundo Slider" />
            <img className="d-block w-100" src={Slider2} alt="imagen" />
            <Carousel.Caption className="textoSlider">
              <h2>Todos los productos, ¡A un click!</h2>
              <p>Encontrá tus productos de maquillaje, skincare y más en RollingCosmetics.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div text="Tercer Slider" />
            <img className="d-block w-100" src={Slider3} alt="imagen" />
            <Carousel.Caption className="textoSlider">
              <h2>Lo más vendido</h2>
              <p>Descubre nuestros productos seleccionados</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="fondoSecundario text-center">
        <h1>RollingCosmetic</h1>
        <p className="textoDescripcion">Cuidado de la piel, Cabello, Coloración, Maquillaje</p>
      </div>
      <div className="cont">
        <div className="container d-flex">
          <div className="orden d-flex">
            <div className="box1 category_list d-flex flex-column align-items-center pe-5 margen">
              <div className="d-flex filtro my-5">
                <Form>
                  <Form.Group className="mb-3" controlId="categoria">
                    <Form.Label>Filtro por categoría</Form.Label>
                    <Form.Select aria-label="categoria" name="categoria" onChange={(e) => {
                      setFiltroProducto(e.currentTarget.value);
                    }}>
                      <option value="">Todas</option>
                      <option value="cabello">Cabello</option>
                      <option value="rostro">Rostro</option>
                      <option value="cuerpo">Cuerpo</option>
                      <option value="perfumeria">Perfumeria</option>
                    </Form.Select>
                  </Form.Group>
                </Form>
              </div>
              <div className="publicidad mt-5">
                <div className="">Te puede interesar también:</div>
                <a href="https://www.google.com"><img src={Publicidad1} alt="Publicidad" /></a>
              </div>
            </div>
            <div className="box2 grillaContenedor d-flex my-5 margen">
              <Container className="justify-content-center">
                <Row>
                  {productos.map((elemento, indice) => {
                    return (
                      <TarjetaProducto producto={elemento} key={indice} getProducto={getProducto} />
                    )
                  })}
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex  fondoSecundario align-items-center my-2">
        <img src={Publicidad2} className="imagenPublicidad marcoPublicidad" alt="Publicidad" />
      </div>
    </div>
  )
}
