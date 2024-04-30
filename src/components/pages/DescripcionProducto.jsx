import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/descripcion_producto.css";
import { useState, useEffect } from "react";
import { CgAdd, CgRemove } from "react-icons/cg";
import { useNavigate, useParams } from "react-router";
import axios from "axios";


export const DescripcionProducto = () => {
    const [cantidadProductos, setCantidadProductos] = useState(1);
    const navigate = useNavigate();
    const { id } = useParams(); 
    const [producto, setProducto] = useState([]);
    const API = import.meta.env.VITE_API;

    const getProducto = async () => {
        try {
            const { data } = await axios.get(`${API}/productos/${id}`);
            setProducto(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(()=>{
        getProducto();
    },[])

    return (
        <>
            <div className="container my-3 my-sm-4 py-3 py-sm-4 custom-background-color custom-no-select">
                <div className="row">
                    <div className="col-sm-6 text-center align-content-center">
                        <img src={producto.imagen} alt={producto.nombre} className="img-fluid custom-img" />
                    </div>
                    <div className="col-sm-6 px-4 px-sm-0">
                        <h2 className="custom-h2 fs-2 mt-4 mt-sm-0">{producto.marca}</h2>
                        <h2 className="fw-bold">{producto.nombre}</h2>
                        <h3 className="mt-5 mb-3 fw-bold fs-4">$ {producto.precio}</h3>
                        <h5 className="mb-0 mt-2">Stock: {producto.stock} unidades</h5>
                        <div className="d-flex">
                            <h3 className="col-6 col-sm-4 mb-0 mt-2 fw-bold fs-4">Cantidad</h3>
                            <CgRemove className="col-2 col-sm-2 mt-2 fs-2 custom-icons" onClick={() => {
                                setCantidadProductos(((cantidadProductos) => (cantidadProductos > 1) ? cantidadProductos - 1 : cantidadProductos = 1))
                            }}/>
                            <h3 className="col-2 col-sm-2 mb-0 mt-2 fw-bold fs-4 text-center text-bg-light">{cantidadProductos}</h3>
                            <CgAdd className="col-2 col-sm-2 mt-2 fs-2 custom-icons" onClick={() => {
                                setCantidadProductos(((cantidadProductos) => (cantidadProductos < producto.stock) ? cantidadProductos + 1 : cantidadProductos = producto.stock))
                            }}/>
                        </div>
                        <button 
                            className="custom-button mt-5 mt-sm-4" 
                            type="button"
                            onClick={()=>{
                                navigate("/*") 
                            }}
                            >Agregar al carro</button>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="flex-column">
                        <h2 className="custom-h2 fs-2 ms-2">Detalles</h2>
                        <hr className="custom-hr m-0"/>
                        <div className="d-flex flex-column flex-lg-row ms-2 mt-5">
                            <h3 className="col-sm-4 fw-bold">Descripción</h3>
                            <p className="col-sm-8">
                                {producto.descripcion}
                            </p>
                        </div>
                        <div className="d-flex flex-column flex-lg-row ms-2 mt-5">
                            <h3 className="col-sm-4 fw-bold">Consideraciones</h3>
                            <p className="col-sm-8">
                                Este producto pertenece a una línea premium y sofisticada de maquillaje, que despierta el placer por los sentidos. Uniendo performance y tecnología con ingredientes naturales que cuidan la piel de una manera única y que buscan resultados profesionales.<br />
                                Una belleza que une.
                            </p>
                        </div>
                        <div className="d-flex flex-column flex-lg-row ms-2 mt-5">
                            <h3 className="col-sm-4 fw-bold">Especificaciones</h3>
                            <p className="col-sm-8">
                                Categoría: {producto.categoria}<br />
                                Marca: {producto.marca}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};