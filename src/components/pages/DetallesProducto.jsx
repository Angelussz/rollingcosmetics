import React from 'react'
import { useParams } from 'react-router-dom';
export const DetallesProducto = () => {
    const {id} = useParams();
  return (
    <h1>DetallesProducto {id}</h1>
  )
}
