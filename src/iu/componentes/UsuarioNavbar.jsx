import { FaUserCircle } from "react-icons/fa";
import Button from "react-bootstrap/Button";
export const UsuarioNavbar = ({usuarioActual,cerrarSesion}) => {
  return (
    <>
      <div>
        <FaUserCircle style={{ fontSize: "40px" }} />
      </div>
      <div className="ms-2">
        <h3 className="ms-2 mb-1 fw-semibold fs-5 text-light">
          {usuarioActual?.nombre}
        </h3>
        <Button variant="primary" onClick={cerrarSesion} size="sm">
          Cerrar Sesión
        </Button>
      </div>
    </>
  );
};
