import { Link } from "react-router-dom";
import "../estilos/tarjetaProductoSlider.css";
import { Col } from 'react-bootstrap';

const TarjetaProductoSlider = ({ producto, getProducto }) => {
    return (
        <>
            <Col className="d-flex custom-col-Slider col justify-content-center">
                <div className="tarjetaSlider" style={{ width: '10 rem' }}>
                    <img src={producto.imagen} className="imagenSlider" alt={producto.nombre}></img>
                    <div className="mt-3">
                        <h5 className="tarjetaChicaSlider">{producto.nombre}</h5>
                        <p className="tarjetaChicaSlider">${producto.precio}</p>
                    </div>
                    <div className="mt-3 botonTarjeta w-75 mx-auto">
                        <Link to={`/descripcion/${producto._id}`} className="link" style={{textDecoration: "none"}}>Ver más</Link>
                    </div>
                </div>
            </Col>
        </>
    )
};

export default TarjetaProductoSlider;