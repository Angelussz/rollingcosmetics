import { useEffect, useState } from "react";
import { Container, Row, Form } from "react-bootstrap";
import axios from "axios";
import TarjetaProducto from "../../iu/componentes/TarjetaProducto";
import Carousel from 'react-bootstrap/Carousel';
import "../pages/estilos/home.css";

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

  /*useEffect(() => {
    getProducto()

    return () => {
      setProductos([]);
    }
  }, []);*/

  useEffect(() => {
    getProducto();
  }, [filtroProducto]);

  useEffect(() => {
    get3Productos();
    return () => {
      setProductos3([]);
    }
  }, []);

  console.log("Filtro: ", filtroProducto);
  return (
    <div className="fondoPrincipal">
      <div>
        <Carousel variant="dark">
          {/* <Carousel.Item>
            <div text="Primer Slider" />
            <img className="d-block w-100" src="https://img.freepik.com/fotos-premium/lapiz-labial-cosmeticos_466973-1132.jpg?size=626&ext=jpg&ga=GA1.1.270176900.1713847796&semt=ais" alt="imagen" />
            <Carousel.Caption className="textoSlider">
              <h2>Promociones Bancarias</h2>
              <p>¡Todos los Martes con bancos seleccionados!</p>
            </Carousel.Caption>
          </Carousel.Item> */}
          <Carousel.Item>
            <div>
              <img className="d-block w-100" src="https://img.freepik.com/fotos-premium/lapiz-labial-cosmeticos_466973-1132.jpg?size=626&ext=jpg&ga=GA1.1.270176900.1713847796&semt=ais" alt="imagen" />
              <Carousel.Caption>
              <h2>Productos Destacados</h2>
              <p>¡Mira nuestros productos más recientes al mejor precio!</p>
                <div className="cardContainer">
                  {productos3.map((elemento, indice) => {
                    return (
                      <TarjetaProducto producto={elemento} key={indice} i={3} />
                    )
                  })}
                </div>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div text="Segundo Slider" />
            <img className="d-block w-100" src="https://img.freepik.com/fotos-premium/lapiz-labial-cosmeticos_466973-1126.jpg?size=626&ext=jpg&ga=GA1.1.270176900.1713847796&semt=ais" alt="imagen" />
            <Carousel.Caption className="textoSlider">
              <h2>Todos los productos, ¡A un click!</h2>
              <p>Encontrá tus productos de maquillaje, skincare, perfumes y más en RollingCosmetics.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div text="Tercer Slider" />
            <img className="d-block w-100" src="https://img.freepik.com/fotos-premium/cosmeticos-refieren-productos-que-utilizan-mejorar-o-alterar-apariencia_35719-15033.jpg?size=626&ext=jpg&ga=GA1.1.270176900.1713847796&semt=ais" alt="imagen" />
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
      <div className="container">
        <div className="orden d-flex">
          <div className="box1 category_list d-flex flex-column align-items-center pe-5">
            <div className="filtro my-5">
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
              <a href="https://www.google.com"><img src="data:image/jpeg;base64,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" alt="Publicidad" /></a>
            </div>
          </div>
          <div className="box2 grillaContenedor d-flex my-5 container">
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
      <div className="d-flex container fondoSecundario align-items-center">
        <img src="https://img.freepik.com/vector-premium/banner-promocion-venta-cuidado-piel-mujer-bata-bano-toalla-gua-sha-herramientas-masaje-parches-ojos_372860-482.jpg?size=626&ext=jpg&ga=GA1.1.270176900.1713847796&semt=ais" className="imagenPublicidad marcoPublicidad" alt="Publicidad" />
      </div>
    </div>
  )
}
