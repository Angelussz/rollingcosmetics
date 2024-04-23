/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';

const Usuario = ({ usuario }) => {
    return (
        <tr>
            <td>{usuario._id}</td>
            <td>{usuario.nombre}</td>
            <td>{usuario.apellido}</td>
            <td>{usuario.email}</td>
            <td>{usuario.rol}</td>
            <td className='p-0'>
                <div>
                    <Button type="button" variant="danger">Borrar</Button>
                </div>
            </td>
        </tr>
    );
};


export default Usuario;