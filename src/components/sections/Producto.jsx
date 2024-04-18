/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';

const Producto = ({ producto }) => {
    return (
        <tr>
            <td>{producto.id}</td>
            <td>{producto.categoria}</td>
            <td>{producto.nombre}</td>
            <td>{producto.marca}</td>
            <td>{producto.precio}</td>
            <td>{producto.stock}</td>
            <td>{producto.urlImagen}</td>
            <td>{producto.descripcion}</td>
            <td className='p-0'>
                <div>
                    <Button type="button" variant="warning">Editar</Button>
                    <Button type="button" variant="danger">Borrar</Button>
                </div>
            </td>
        </tr>
    );
};


export default Producto;