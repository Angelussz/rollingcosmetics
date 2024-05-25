import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import axios from 'axios';
export const AuthProvider = ({ children }) => {
  const [usuarioActual, setUsuarioActual] = useState(
    JSON.parse(sessionStorage.getItem("auth"))?JSON.parse(sessionStorage.getItem("auth")):undefined
  );
  const GuardarUsuario = (auth) => {
    sessionStorage.setItem("auth", JSON.stringify(auth));
  };
  const ObtenerUsuario = () => {
    return JSON.parse(sessionStorage.getItem("auth"));
  };
  const RemoverUsuario = () => {
    sessionStorage.removeItem("auth");
  };
    useEffect(() => {
      const sesion = ObtenerUsuario()
      if(sesion){
        setUsuarioActual(sesion)
      }

      return () => {
        setUsuarioActual(undefined)
      }
    }, [])
    useEffect(() => {
      if(usuarioActual !== undefined){
        axios.defaults.headers.common["Authorization"] = `Bearer ${usuarioActual.token}`
      }else{
        delete axios.defaults.headers.common["Authorization"]
      }
    }, [usuarioActual])
  return (
    <AuthContext.Provider
      value={{
        usuarioActual,
        setUsuarioActual,
        GuardarUsuario,
        RemoverUsuario,
        ObtenerUsuario,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
