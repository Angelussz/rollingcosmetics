import BorrarUsuario from "./BorrarUsuario.jsx";

const Usuario = ({ usuario, getUsuario }) => {
    return (
        <tr>
            <td>{usuario._id}</td>
            <td>{usuario.nombre}</td>
            <td>{usuario.apellido}</td>
            <td>{usuario.email}</td>
            <td>{usuario.rol}</td>
            <td className='p-0'>
                <div className="d-flex justify-content-center">
                    <BorrarUsuario id={usuario._id} getUsuario={getUsuario} rol={usuario.rol} />
                </div>
            </td>
        </tr>
    );
};


export default Usuario;