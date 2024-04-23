/* eslint-disable react/prop-types */
import "bootstrap/dist/css/bootstrap.min.css";

const PruebaDescripcion = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <img src="" alt="" className="img-fluid" />
                    </div>
                    <div className="col align-items-center">
                        <h2>Pantene</h2>
                        <h2>Maquillajes y cosméticos de muy buena calidad</h2>
                        <h3>$ 45.000</h3>
                        <div className="d-grid gap-3 col-8">
                            <p className="mb-0 mt-2">Cantidad en stock: </p>
                            <button className="btn" type="button" href="">Agregar al carro</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="flex-column">
                        <h1>Hola mundo</h1>
                        <h3>Descripcion</h3>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PruebaDescripcion;