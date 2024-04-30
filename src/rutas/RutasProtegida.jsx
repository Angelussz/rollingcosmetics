import React from 'react'
import {Navigate, Outlet } from "react-router-dom"
import Error404 from '../components/pages/Error404'
export const RutasProtegida = ({
  esPermitida,
  redireccionar = "/",
  children
}) => {
  if(!esPermitida){
    return <Error404/>
    // return <Navigate to={redireccionar}/>
    
  }
  return children?children: <Outlet />
}
