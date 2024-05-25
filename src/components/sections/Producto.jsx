import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router";
import BorrarProducto from "./BorrarProducto";
import "../../css/administracion.css";

const Producto = ({ producto, getProducto }) => {
    const navigate = useNavigate();

    return (
        <tr>
            <td className="custom-td-width">{producto._id}</td>
            <td>{producto.categoria}</td>
            <td>{producto.nombre}</td>
            <td>{producto.marca}</td>
            <td>{producto.precio}</td>
            <td>{producto.stock}</td>
            <td>{producto.fecha}</td>
            <td className="custom-td-width">{producto.imagen}</td>
            <td className="custom-td-width">{producto.descripcion}</td>
            <td className='p-0 align-content-center'>
                <div className="d-flex justify-content-around align-content-center">
                    <Button type="button" variant="warning" className="mx-2" onClick={()=>{ navigate(`/editar/${producto._id}`) }}>Editar</Button>
                    <BorrarProducto id={producto._id} getProducto={getProducto} />
                </div>
            </td>
        </tr>
    );
};


export default Producto;
