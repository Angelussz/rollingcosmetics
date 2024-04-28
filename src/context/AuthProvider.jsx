import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
// import axios from 'axios';
const usuario = {
    id: "122afsd",
    nombre: "Angelo",
    apellido: "Perez",
    email: "angelo@gmail.com",
    rol: "Usuario",
  }
export const AuthProvider = ({ children }) => {
  const [usuarioActual, setUsuarioActual] = useState(usuario);
  const GuardarUsuario = (auth) => {
    sessionStorage.setItem("auth", JSON.stringify(auth));
  };
  const ObtenerUsuario = () => {
    return JSON.parse(sessionStorage.getItem("auth"));
  };
  const RemoverUsuario = () => {
    sessionStorage.removeItem("auth");
  };
  //   useEffect(() => {
  //     const sesion = ObtenerUsuario()
  //     if(sesion){
  //       setUsuarioActual(sesion)
  //     }

  //     return () => {
  //       setUsuarioActual(undefined)
  //     }
  //   }, [])
  //   useEffect(() => {
  //     if(currentUser !== undefined){
  //       axios.defaults.headers.common["Authorization"] = `Bearer ${currentUser.token}`
  //     }else{
  //       delete axios.defaults.headers.common["Authorization"]
  //     }
  //   }, [currentUser])
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
