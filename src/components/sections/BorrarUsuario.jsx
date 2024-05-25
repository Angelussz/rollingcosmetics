import { Button } from "react-bootstrap";
import Swal from 'sweetalert2';
import axios from "axios";

const BorrarUsuario = ({ id, getUsuario,rol }) => {
    const API = import.meta.env.VITE_API;

    const handleDelete = () => {
        try {
            Swal.fire({
                title: "¿Desea eliminar al usuario del sistema?",
                text: "¡La acción no se puede revertir!",
                icon: "warning",
                showCancelButton: true,
                cancelButtonText: "Cancelar",
                confirmButtonColor: "#d33",
                confirmButtonText: "Eliminar",
                cancelButtonColor: "#3085d6"
            }).then(async (result) => {
                if(rol === "Admin"){
                    return;
                }
                if (result.isConfirmed) {

                    await axios.delete(`${API}/usuarios/` + id);

                    getUsuario(); 
                    Swal.fire({
                        title: "Usuario eliminado",
                        text: "¡El usuario se ha eliminado!",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            });
        } catch (error) {
            console.error("Error -----> ", error.message);
        }
    }

    return (
        <div>
            <Button type="button" variant="danger" onClick={ handleDelete } disabled={rol === "Admin"} >
                Eliminar
            </Button>
        </div>
    );
};

export default BorrarUsuario;