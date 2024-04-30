import { Link } from "react-router-dom";
import "../estilos/tarjetaProducto.css";
import { Col } from 'react-bootstrap';

const TarjetaProducto = ({ producto, getProducto }) => {
    return (
        <>
            <Col xs={6} md={4} lg={2} className="custom-col col justify-content-center">
                <div className="tarjeta" style={{ width: '10 rem' }}>
                    <img src={producto.imagen} className="imagen" alt={producto.nombre}></img>
                    <div className="mt-3">
                        <h5 className="tarjetaChica">{producto.nombre}</h5>
                        <p className="tarjetaChica">${producto.precio}</p>
                    </div>
                    <div className="mt-3 botonTarjeta w-75 mx-auto">
                        <Link to={`/descripcion/${producto._id}`} className="link" style={{textDecoration: "none"}}>Ver más</Link>
                    </div>
                </div>
            </Col>
        </>
    )
};

export default TarjetaProducto;