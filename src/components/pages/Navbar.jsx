import { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { ModalInciarSesion } from "../../iu/componentes/ModalInciarSesion";
import Button from "react-bootstrap/Button";
import { AuthContext } from "../../context";
import Col from "react-bootstrap/Col";
import { UsuarioNavbar } from "../../iu/componentes/UsuarioNavbar";

const Navbarr = () => {
  const [show, setShow] = useState(false);
  const { usuarioActual, RemoverUsuario,setUsuarioActual } = useContext(AuthContext);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const cerrarSesion = ()=>{
    RemoverUsuario();
    setUsuarioActual(undefined);
  }
  return (
    <Navbar expand="lg" className="bg-danger">
      <Container>
        <Navbar.Brand href="#home" className="d-none d-lg-block">
          Inicio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Col lg={{ order: "last" }}>
          <div className="d-flex justify-content-end align-items-center">
            {
              usuarioActual !== undefined ? <UsuarioNavbar usuarioActual={usuarioActual} cerrarSesion={cerrarSesion} /> : <Button variant="primary" onClick={handleShow}>
                Iniciar Sesión
              </Button>
            }
          </div>
          
        </Col>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Acerca de nosotros</Nav.Link>
            <Nav.Link href="#link">Favoritos</Nav.Link>
            <Nav.Link href="#link">Administracion</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <ModalInciarSesion show={show} handleClose={handleClose} />
    </Navbar>
  );
};

export default Navbarr;
