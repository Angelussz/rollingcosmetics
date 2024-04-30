import { Button } from "react-bootstrap";
import Swal from 'sweetalert2';
import axios from "axios";

const BorrarProducto = ({ id, getProducto }) => {
    const API = import.meta.env.VITE_API;

    const handleDelete = () => {
        try {
            Swal.fire({
                title: "¿Desea eliminar el producto?",
                text: "¡La acción no se puede revertir!",
                icon: "warning",
                showCancelButton: true,
                cancelButtonText: "Cancelar",
                confirmButtonColor: "#d33",
                confirmButtonText: "Eliminar",
                cancelButtonColor: "#3085d6"
            }).then(async (result) => {
                if (result.isConfirmed) {

                    await axios.delete(`${API}/productos/` + id);

                    getProducto(); 
                    Swal.fire({
                        title: "Producto eliminado",
                        text: "¡El producto se ha eliminado!",
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
            <Button type="button" variant="danger" onClick={ handleDelete }>
                Eliminar
            </Button>
        </div>
    );
};

export default BorrarProducto;