import React from 'react'
import {Navigate, Outlet } from "react-router-dom"
export const RutasProtegida = ({
  esPermitida,
  redireccionar = "/",
  children
}) => {
  if(!esPermitida){
    return <div><h1>Pagina error</h1></div>
    // return <Navigate to={redireccionar}/>
    
  }
  return children?children: <Outlet />
}
