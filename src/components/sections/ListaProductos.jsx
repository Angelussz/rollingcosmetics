import { Table, Row, Col, Button } from 'react-bootstrap';
import Producto from "./Producto";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router";


const ListaProductos = () => {
    const API = import.meta.env.VITE_API;
    const [productos,setProductos] = useState([]);
    const navigate = useNavigate();

    const getProducto = async () => {
        try {
            const response = await fetch(`${API}/productos`);
            const resJson = await response.json();
            setProductos(resJson);
        } catch (error) {
            console.error("ERROR ---> ",error);
        }
    }

    useEffect(() => {
        getProducto()

        return () => {
            setProductos([]);
        }
    },[]);

    return (
        <>
            <div className="pb-4 px-4">
                <div className="container-fluid"> 
                    <Row>
                        <Col xs={9}>
                            <h3 className="mb-3">Lista de Productos</h3>
                        </Col>   
                        <Col xs={3} className="d-flex justify-content-end mb-3">
                            <Button 
                                variant="primary"
                                onClick={()=>{
                                    navigate("/crear-producto")
                                }}
                            >
                                Guardar Producto
                            </Button>
                        </Col>
                    </Row> 
                </div>
                <Table responsive bordered hover >
                    <thead>
                        <tr>
                            <th>ID</th> 
                            <th>Categoría</th>
                            <th>Nombre</th>
                            <th>Marca</th>
                            <th>Precio</th>
                            <th>Stock</th>
                            <th>Fecha ultimo stock</th>
                            <th>Imagen</th>
                            <th>Descripción</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            productos.map((producto)=>{
                                let fechaFor = "No especifica";
                                if(producto.fecha){
                                    const fechamod = producto.fecha;
                                    
                                    let fechaFinal = new Date(fechamod);
                                    let fechaValida = fechaFinal.toISOString().slice(0, 10);
                                    fechaValida = fechaValida.split("-");
                                    fechaValida = fechaValida.reverse();

                                    fechaFor = fechaValida.join("/");
                                                                       
                                }
                                const nuevoProducto = {...producto,fecha:fechaFor};
                                return (
                                    <Producto key={producto._id} producto={nuevoProducto} getProducto={getProducto} />
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export default ListaProductos;