import ListaProductos from "../sections/ListaProductos";
import ListaUsuarios from "../sections/ListaUsuarios";

export const Administracion = () => {

    return (
        <div>
            <h1 className="display-5 text-center my-5">Administración</h1>
            <ListaProductos />
            <ListaUsuarios />
        </div>
    );
};