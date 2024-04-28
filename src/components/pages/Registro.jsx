import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import "./estilos/registro.css"

const Registro = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [clave, setClave] = useState('');
    const [rol, setRol] = useState('Usuario');
    const [nombreError, setNombreError] = useState('');
    const [apellidoError, setApellidoError] = useState('');
    

    const API = import.meta.env.VITE_API;

    const handleRegistro = (e) => {
        e.preventDefault();
        // Acá iría conex con el back je
        console.log({ nombre, apellido, email, clave, rol });
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
            <div className='container fondoSecundarioRegistro my-5 py-2' style={{ borderRadius: "10px" }}>
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
                            onChange={(e) => setEmail(e.target.value)}
                            required isInvalid={!validateEmail(email)}
                            minLength={7}
                            maxLength={35}
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor ingresa un email válido.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formClave">
                        <Form.Label>Clave</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Clave"
                            value={clave}
                            onChange={(e) => setClave(e.target.value)}
                            minLength={6}
                            maxLength={20}
                            required
                            isInvalid={!validateClave(clave)}
                        />
                        <Form.Control.Feedback type="invalid">
                            La clave debe contener al menos una mayúscula, un número, un carácter especial (!*@#$%^&+=) y tener entre 6 y 20 caracteres.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formRol" style={{ display: "none" }}>
                        <Form.Label>Rol</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Rol"
                            value={rol} readOnly
                        />
                    </Form.Group>

                    <Button variant="outline-success" size="lg" className='my-3'>Registrar</Button>
                </Form>
            </div>
        </div>
    );
};

export default Registro;
