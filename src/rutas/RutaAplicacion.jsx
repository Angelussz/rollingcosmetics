import { useContext, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Destacados, Home, EditarProducto, Favoritos, Busqueda, Administracion, Contacto, DescripcionProducto } from "../components/pages";
import Nosotros from "../components/pages/Nosotros";
import Error404 from "../components/pages/Error404";
import CrearProducto from "../components/sections/CrearProducto";
import { RutasProtegida } from "./RutasProtegida";
import Registro from "../components/pages/Registro";
import { AuthContext } from "../context";

export const RutaAplicacion = () => {
  const {usuarioActual} = useContext(AuthContext)

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/destacados" element={<Destacados />} />
        <Route path="/busqueda/:busqueda" element={<Busqueda />} />
        <Route path="/contacto" element={<Contacto/>} />
        <Route path="/nosotros" element={<Nosotros/>} />
        <Route path="/*" element={<Error404/>} />
        <Route path="/descripcion/:id" element={<DescripcionProducto />} />
        <Route path="/registro" element={ usuarioActual=== undefined?<Registro />:<Navigate to={"/"}/>} />
        <Route path="/destacados" element={<Destacados />}/>
        <Route path="/favoritos" element={<Favoritos />}/>
        <Route
          element={
            <RutasProtegida
              esPermitida={!!usuarioActual && usuarioActual?.rol === "Admin"}
            />
          }
        >
          <Route path="/crear-producto" element={<CrearProducto />} />
          <Route path="/administracion" element={<Administracion />} />
          <Route path="/editar/:id" element={<EditarProducto />} />
        </Route>
        <Route path="/favoritos"
          element={
            <RutasProtegida
              esPermitida={!!usuarioActual && usuarioActual?.rol === "Usuario"}
            >
              <Favoritos />
            </RutasProtegida>
          }
        >
        </Route>
        <Route path="/*" element={<div><h1>Pagina Error</h1></div>} />
      </Routes>
    </>
  );
};
