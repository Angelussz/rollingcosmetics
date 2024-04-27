import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { IoSearchSharp } from "react-icons/io5";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
export const ModalBusqueda = ({ show, handleClose }) => {
  const API = import.meta.env.VITE_API_BACK;
  const [productosEncontrados, setProductosEncontrados] = useState([]);
  const navigate = useNavigate();
  const [busquedaUrl, setBusquedaUrl] = useState("");
  const getProductos = async (busqueda) => {
    try {
      setBusquedaUrl(busqueda);
      const respuesta = axios.get(
        `${API}/productos?limite=3&busqueda=${busqueda}`
      );
      const { data } = await respuesta;
      setProductosEncontrados(data);
    } catch (error) {
      setProductosEncontrados([]);
      setBusquedaUrl("");
    }
  };
  const handleOnChange = (e) => {
    if (e.target.value.length <= 0) {
      setProductosEncontrados([]);
      return;
    }
    getProductos(e.target.value);
  };
  const onResetClose = () => {
    handleClose();
    setBusquedaUrl(API);
    setProductosEncontrados([]);
  };
  return (
    <Modal show={show} onHide={onResetClose}>
      <Modal.Header closeButton className="bg-modal-color-header">
        <Modal.Title>Buscador</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-modal-color-body">
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={handleOnChange}
          />
          <Button variant="secondary">
            <IoSearchSharp />
          </Button>
        </Form>
        <hr className="mx-3" />
        {productosEncontrados.length <= 0 ? (
          <p className="text-center " style={{ fontSize: "14px" }}>
            Buscar Producto
          </p>
        ) : (
          <>
            {productosEncontrados.map((producto) => (
              <div
                key={producto._id}
                className="d-flex my-3 p-1 card-producto rounded-3"
              >
                <section style={{ width: "80px" }}>
                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    style={{ width: "100%", height: "100%" }}
                  />
                </section>
                <section className="ps-3">
                  <h5>{producto.nombre}</h5>
                  <h6>${producto.precio}</h6>
                  <div>
                    <button
                      className="rounded-5 m-2 enlace-producto"
                      onClick={() => {
                        handleClose();
                        navigate(`/detalles/${producto._id}`);
                      }}
                    >
                      Ver producto
                    </button>
                  </div>
                </section>
              </div>
            ))}
            <Link
              to={`/busqueda/${busquedaUrl}`}
              className="text-center d-block bg-danger link-light"
              onClick={()=>{
                onResetClose();
                navigate(`/busqueda/${busquedaUrl}`);
              }}
            >
              Ver más
            </Link>
          </>
        )}
      </Modal.Body>
    </Modal>
  );
};
