import { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { ModalInciarSesion } from "../../iu/componentes/ModalInciarSesion";
import Button from "react-bootstrap/Button";
import { AuthContext } from "../../context";
import Col from "react-bootstrap/Col";
import { UsuarioNavbar } from "../../iu/componentes/UsuarioNavbar";
import { IoMdHelpCircle } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
const Navbarr = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const { usuarioActual, RemoverUsuario, setUsuarioActual } =
    useContext(AuthContext);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const cerrarSesion = () => {
    RemoverUsuario();
    setUsuarioActual(undefined);
    navigate("/")
  };
  return (
    <Navbar expand="lg" className="bg-danger" data-bs-theme="dark" >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Col lg={{ order: "last" }}>
          <div className="d-flex justify-content-end align-items-center">
            {usuarioActual !== undefined ? (
              <UsuarioNavbar
                usuarioActual={usuarioActual}
                cerrarSesion={cerrarSesion}
              />
            ) : (
              <Button variant="primary" onClick={handleShow}>
                Iniciar Sesión
              </Button>
            )}
            <NavLink to={"/contacto"}>
              <IoMdHelpCircle
                style={{ fontSize: "40px" }}
                className="ms-3 text-light"
              />
            </NavLink>
          </div>
        </Col>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className={"nav-link"}>
              Inicio
            </NavLink>
            <NavLink to="/destacados" className={"nav-link"}>
              Destacado
            </NavLink>
            <NavLink to="/contacto" className={"nav-link"}>
              Contacto
            </NavLink>
            <NavLink to="/nosotros" className={"nav-link"}>
              Acerca de nosotros
            </NavLink>
            {usuarioActual?.rol === "Admin" ? (
              <NavLink to="/administracion" className={"nav-link"}>
                Administracion
              </NavLink>
            ) : usuarioActual?.rol === "Usuario" ? (
              <NavLink to="/favoritos" className={"nav-link"}>
                Favoritos
              </NavLink>
            ) : (
              <></>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
      <ModalInciarSesion show={show} handleClose={handleClose} />
    </Navbar>
  );
};

export default Navbarr;
