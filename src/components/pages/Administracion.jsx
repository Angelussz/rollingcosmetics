import ListaProductos from "../sections/ListaProductos";
import ListaUsuarios from "../sections/ListaUsuarios";

// import { useNavigate } from "react-router";

const Administracion = () => {
    // const navigate = useNavigate();

    return (
        <div>
            <h1 className="display-5 text-center my-3">Administración</h1>
            <ListaProductos />
            <ListaUsuarios />
        </div>
    );
};

export default Administracion;