import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { AuthContext } from "../../context";
import clsx from "clsx";
import { Link } from "react-router-dom";
export const ModalInciarSesion = ({ show, handleClose }) => {
  const API = import.meta.env.VITE_API_BACK;
  const [cargando, setCargando] = useState(false);
  const { setUsuarioActual, GuardarUsuario } = useContext(AuthContext);
  const EsquemaInicio = Yup.object().shape({
    email: Yup.string()
      .email("Formato Invalido")
      .min(7)
      .max(128)
      .required("el email es requerido"),
    clave: Yup.string().min(6).max(20).required("la contraseña es requerida"),
  });
  const valoresIniciales = {
    email: "",
    clave: "",
  };
  const formik = useFormik({
    initialValues: valoresIniciales,
    validationSchema: EsquemaInicio,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (valores) => {
      setCargando(true);
      Swal.fire({
        title: "Inciando sesión...",
        allowEscapeKey: false,
        allowOutsideClick: false,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
      });
      try {
        const respuesta = await axios.post(`${API}/usuarios/login`, valores);
        
        if (respuesta.status === 200) {
          GuardarUsuario(respuesta.data);
          setUsuarioActual(respuesta.data);
          formik.resetForm();
          setCargando(false);
          Swal.close();
          handleClose();
        } else {
          alert("Ocurrio un error");
          setCargando(false);
          Swal.close();
        }
      } catch (error) {
        alert(`${error.response.data.mensaje}`);
        setCargando(false);
        Swal.close();
        console.log(error)
      }
    },
  });

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" controlId="Email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingrese su email"
              name="email"
              {...formik.getFieldProps("email")}
              className={clsx(
                "form-control",
                {
                  "is-invalid": formik.touched.email && formik.errors.email,
                },
                {
                  "is-valid": formik.touched.email && !formik.errors.email,
                }
              )}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="mt-2 text-danger fw-bolder">
                <span role="alert">{formik.errors.email}</span>
              </div>
            )}
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="clave"
              {...formik.getFieldProps("clave")}
              className={clsx(
                "form-control",
                {
                  "is-invalid":
                    formik.touched.clave && formik.errors.clave,
                },
                {
                  "is-valid":
                    formik.touched.clave && !formik.errors.clave,
                }
              )}
            />
            {formik.touched.clave && formik.errors.clave && (
              <div className="mt-2 text-danger fw-bolder">
                <span role="alert">{formik.errors.clave}</span>
              </div>
            )}
          </Form.Group>
          <div>
            <Button
              type="submit"
              variant="primary"
              className="mx-2"
              disabled={cargando}
            >
              {cargando ? (
                <div className="spinner-grow" role="status">
                  <span className="visually-hidden">Cargando...</span>
                </div>
              ) : (
                <>Ingresar</>
              )}
            </Button>
            <Button
              variant="secondary"
              onClick={handleClose}
              className="mx-2"
              disabled={cargando}
            >
              Cerrar
            </Button>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <p>No tienes cuenta aun?</p>
        <Link to={"/registro"} onClick={()=>{handleClose()}} >Registrase</Link>
      </Modal.Footer>
    </Modal>
  );
};
