import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Destacados, Home, EditarProducto } from "../components/pages";
import { RutasProtegida } from "./RutasProtegida";
import Administracion from "../components/pages/Administracion";
import { Favoritos } from "../components/pages/Favoritos";
export const RutaAplicacion = () => {
  const [usuario, setUsuario] = useState({
    id: 1,
    nombre: "Angelo",
    apellido: "Perez",
    email: "angelo@gmail.com",
    rol: "Usuario",
  });

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/destacados" element={<Destacados />} />
        <Route path="/Contacto" element={<Destacados />} />
        <Route
          element={
            <RutasProtegida
              esPermitida={!!usuario && usuario?.rol === "Admin"}
            />
          }
        >
          <Route path="/administracion" element={<Administracion />} />
          <Route path="/editar/:id" element={<EditarProducto />} />
        </Route>
        <Route path="/favoritos"
          element={
            <RutasProtegida
              esPermitida={!!usuario && usuario?.rol === "Usuario"}
            >
              <Favoritos />
            </RutasProtegida>
          }
        >
        </Route>
      </Routes>
    </>
  );
};