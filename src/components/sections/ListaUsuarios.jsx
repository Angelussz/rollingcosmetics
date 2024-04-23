/* eslint-disable react-hooks/exhaustive-deps */
import { Table } from 'react-bootstrap';
import Usuario from "./Usuario";
import { useState, useEffect } from 'react';


const ListaUsuarios = () => {
    const API = import.meta.env.VITE_API;
    const [usuarios,setUsuarios] = useState([]);

    const getUsuario = async () => {
        try {
            const response = await fetch(`${API}/usuarios`);
            const resJson = await response.json();
            console.log(resJson);

            setUsuarios(resJson);
        } catch (error) {
            console.error("ERROR ---> ",error);
        }
    }

    useEffect(() => {
        getUsuario()

        return () => {
            setUsuarios([]);
        }
    },[]);

    return (
        <>
            <div className="p-4">
                <div className="container-fluid"> 
                    <h3 className="mb-3">Lista de Usuarios</h3>
                </div>
                <Table responsive bordered hover >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Correo electrónico</th>
                            <th>Rol</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            usuarios.map((usuario)=>{
                                return (
                                    <Usuario key={usuario._id} usuario={usuario} />
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export default ListaUsuarios;