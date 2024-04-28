import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Destacados, Home, EditarProducto, Favoritos, Busqueda, Administracion, Contacto, DescripcionProducto } from "../components/pages";
import Error404 from "../components/pages/Error404";
import CrearProducto from "../components/sections/CrearProducto";
import { RutasProtegida } from "./RutasProtegida";


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
        <Route path="/busqueda/:busqueda" element={<Busqueda />} />
        <Route path="/contacto" element={<Contacto/>} />
        <Route path="/*" element={<Error404/>} />
        <Route path="/descripcion/:id" element={<DescripcionProducto />} />

        <Route
          element={
            <RutasProtegida
              esPermitida={!!usuario && usuario?.rol === "Admin"}
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
