import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../context";
export const ModalInciarSesion = ({ show, handleClose }) => {

  const API = import.meta.env.VITE_API_BACK;
  const [cargando, setCargando] = useState(false);
  const {setUsuarioActual,GuardarUsuario} = useContext(AuthContext);
  const IniciarSesion = async (valores) => {
    setCargando(true);
    try {
      const respuesta = await axios.post(`${API}/usuarios/login`, valores);
      if (respuesta.status === 200) {
        GuardarUsuario(respuesta.data);
        setUsuarioActual(respuesta.data);
        handleClose();
      }
    } catch (error) {
        alert("Ocurrio un error");
    }
    finally{
        setCargando(false);
    }
  };
  const handleIniciarSesion = () => {
    const usuario = {
      email: "angelo@gmail.com",
      clave: "Password!123",
    };
    IniciarSesion(usuario);
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleIniciarSesion}>
          Ingresar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
