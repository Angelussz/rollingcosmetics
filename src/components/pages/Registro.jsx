import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import "./estilos/registro.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Registro = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [clave, setClave] = useState('');
    const [nombreError, setNombreError] = useState('');
    const [apellidoError, setApellidoError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [claveError, setClaveError] = useState('');
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);

    const navigate = useNavigate();

    const API = import.meta.env.VITE_API;

    const handleRegistro = (e) => {
        e.preventDefault();
        enviarUsuarios();
    };

    const enviarUsuarios = async () => {
        try {
            const cuerpoEnviar = { nombre, apellido, email, clave };
            const respuesta = await axios.post(`${API}/usuarios`, cuerpoEnviar);
            if (respuesta.status === 201) {
                setShowSuccessModal(true);
                //Formatear formulario
            } else {
                setShowErrorModal(true);
            }
        } catch (error) {
            console.error(error);
            setShowErrorModal(true);
        }
    };

    const handleCloseSuccessModal = () => {
        setShowSuccessModal(false);
        navigate("/");
    };

    const handleCloseErrorModal = () => {
        setShowErrorModal(false);
    };

    const validateNombre = (nombre) => {
        const re = /^[a-zA-Z\s]{4,30}$/;
        return re.test(nombre);
    };

    const validateApellido = (apellido) => {
        const re = /^[a-zA-Z\s]{4,30}$/;
        return re.test(apellido);
    };

    const handleNombreChange = (e) => {
        const newValue = e.target.value;
        setNombre(newValue);
        if (!validateNombre(newValue)) {
            setNombreError('Nombre ingresado no es válido');
        } else {
            setNombreError('');
        }
    };

    const handleApellidoChange = (e) => {
        const newValue = e.target.value;
        setApellido(newValue);
        if (!validateApellido(newValue)) {
            setApellidoError('Apellido ingresado no es válido');
        } else {
            setApellidoError('');
        }
    };
    
    const handleEmailChange = (e) => {
        const newValue = e.target.value;
        setEmail(newValue);
        if (!validateEmail(newValue)) {
            setEmailError('Por favor ingresa un email válido.');
        } else {
            setEmailError('');
        }
    };

    const handleClaveChange = (e) => {
        const newValue = e.target.value;
        setClave(newValue);
        if (!validateClave(newValue)) {
            setClaveError('La clave debe contener al menos una mayúscula, un número, un carácter especial (!*@#$%^&+=) y tener entre 6 y 20 caracteres.');
        } else {
            setClaveError('');
        }
    };

    const validateEmail = (email) => {
        const re =
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    };

    const validateClave = (clave) => {
        const re = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!*@#$%^&+=])(?=.{6,20})/;
        return re.test(clave);
    };

    return (
        <div>
            <div className="fondoSecundario sombra py-2 my-3 container" style={{ borderRadius: "10px" }}>
                <h1 className="text-center"> RollingCosmetic </h1>
                <div className="ms-3">
                    <h2>¡Regístrate!</h2>
                    <p>Coloca tus datos y síguenos en Nuestras Redes para estar al tanto de nuestras Promociones</p>
                </div>
            </div>
            <div className='orden d-flex container'>
                <div className='contenedorRegistro fondoSecundarioRegistro my-5 py-2 container' style={{ borderRadius: "10px" }}>
                    <Form onSubmit={handleRegistro}>
                        <Form.Group controlId="formNombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nombre"
                                value={nombre}
                                onChange={handleNombreChange}
                                required
                                isInvalid={nombreError !== ''}
                            />
                            <Form.Control.Feedback type="invalid">
                                {nombreError}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formApellido">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Apellido"
                                value={apellido}
                                onChange={handleApellidoChange}
                                required
                                isInvalid={apellidoError !== ''}
                            />
                            <Form.Control.Feedback type="invalid">
                                {apellidoError}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={handleEmailChange}
                                required
                                isInvalid={emailError !== ''}
                                minLength={7}
                                maxLength={35}
                            />
                            <Form.Control.Feedback type="invalid">
                                {emailError}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formClave">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Clave"
                                value={clave}
                                onChange={handleClaveChange}
                                minLength={6}
                                maxLength={20}
                                required
                                isInvalid={claveError !== ''}
                            />
                            <Form.Control.Feedback type="invalid">
                                {claveError}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Button type="submit" variant="outline-success" size="lg" className='my-3'>Registrar</Button>
                    </Form>
                </div>
                <div className='contenedorRegistro'>
                    <img className='imagenRegistro sombra' src="https://ganapromo.com/wp-content/uploads/2022/01/loreal-gana-kit.jpeg" alt="imagen de registro" />
                </div>
            </div>
            {/* Modales */}
            <Modal show={showSuccessModal} onHide={handleCloseSuccessModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Éxito - Usuario creado correctamente</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="success" onClick={handleCloseSuccessModal}>
                        Aceptar
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={showErrorModal} onHide={handleCloseErrorModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Error - Usuario con el correo ya ingresado</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleCloseErrorModal}>
                        Aceptar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Registro;
