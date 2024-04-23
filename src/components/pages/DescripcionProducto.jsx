/* eslint-disable react/prop-types */
import "bootstrap/dist/css/bootstrap.min.css";

export const DescripcionProducto = ({ producto }) => {
    return (
        <>
            <div className="d-flex">
                <div className="row">
                    <div className="col text-center">
                        <img src={producto.imagen} alt={producto.nombre} className="img-fluid" />
                    </div>
                    <div className="col align-items-center">
                        <h2>{producto.marca}</h2>
                        <h2>{producto.nombre}</h2>
                        <h3>$ {producto.precio}</h3>
                        <div className="d-grid gap-3 col-8">
                            <p className="mb-0 mt-2">Cantidad en stock: {producto.stock}</p>
                            <a className="btn" type="button" href="../sections/error404.html">Agregar al carro</a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="flex-column">

                    </div>
                </div>
            </div>
        </>
    );
};