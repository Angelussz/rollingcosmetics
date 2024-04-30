import { Table } from 'react-bootstrap';
import Usuario from "./Usuario";
import axios from "axios"
import { useState, useEffect } from 'react';


const ListaUsuarios = () => {
    const API = import.meta.env.VITE_API;
    const [usuarios,setUsuarios] = useState([]);

    const getUsuario = async () => {
        try {
            const response = await axios(`${API}/usuarios`);
            const {data:resJson} = await response;
            

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
                                    <Usuario key={usuario._id} usuario={usuario} getUsuario={getUsuario} />
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