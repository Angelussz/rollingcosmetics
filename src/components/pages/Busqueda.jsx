import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
export const Busqueda = () => {
    const API = import.meta.env.VITE_API_BACK;
    const { busqueda } = useParams();
    const [productos, setProductos] = useState([])
    const getProductos = async () => {
        try {
          const respuesta = await axios.get(`${API}/productos?busqueda=${busqueda}`);
          console.log("RESPONSE AXIOS -->",respuesta);
          // const produc = response.data;
          setProductos(respuesta.data);
        } catch (error) {
          console.log("ERROR -->", error);
        }
      };
    useEffect(() => {
      getProductos()
    
      return () => {
        setProductos([])
      }
    }, [])
    
    
  
  return <>
  <h1>Busqueda</h1>
  <code>{JSON.stringify(productos)}</code>
  </>;
};
