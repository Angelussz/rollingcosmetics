/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router";

const Producto = ({ producto }) => {
    const navigate = useNavigate();

    return (
        <tr>
            <td>{producto._id}</td>
            <td>{producto.categoria}</td>
            <td>{producto.nombre}</td>
            <td>{producto.marca}</td>
            <td>{producto.precio}</td>
            <td>{producto.stock}</td>
            <td>{producto.imagen}</td>
            <td>{producto.descripcion}</td>
            <td className='p-0'>
                <div>
                    <Button type="button" variant="warning" onClick={()=>{ navigate(`/editar/${producto._id}`) }}>Editar</Button>
                    <Button type="button" variant="danger">Borrar</Button>
                </div>
            </td>
        </tr>
    );
};


export default Producto;