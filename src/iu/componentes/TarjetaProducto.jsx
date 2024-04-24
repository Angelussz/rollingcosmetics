import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Col } from 'react-bootstrap';
import "../../iu/estilos/home.css"

const TarjetaProducto = ({ producto }) => {
    return (
        <>
            {/* <Col xs={6} md={4} lg={2}>
                {/* <Card className="tarjeta" style={{backgroundColor: '#b5b5b5'}}> * /}
                <Card className="tarjeta">
                    <Card.Img className="imagen" src={producto.urlImagen} />
                    <Card.Body className='tarjeta1'>
                        <Card.Title>{producto.nombre}</Card.Title>
                        <Card.Text>
                            <span>${producto.precio}</span>
                        </Card.Text>
                        <Button className="botonTarjeta">Agregar al Carrito</Button>
                    </Card.Body>
                </Card>
            </Col> */}
            <div className="col contenedor" xs={6} md={4} lg={2} >
                <div className="tarjeta" style={{width: '10 rem'}}>
                    <img src={producto.urlImagen} className="imagen" alt={producto.nombre}></img>
                    <div className="mt-3">
                        <h5 className="">{producto.nombre}</h5>
                        <p className="">{producto.precio}</p>
                    </div>
                    <button type="button" className="mt-3 botonTarjeta">Agregar al Carrito</button>
                </div>
            </div>
        </>
    )
};

export default TarjetaProducto;