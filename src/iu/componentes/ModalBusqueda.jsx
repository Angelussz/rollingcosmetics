import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { IoSearchSharp } from "react-icons/io5";
export const ModalBusqueda = ({show,handleClose}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Buscador</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="secondary">
            <IoSearchSharp />
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
