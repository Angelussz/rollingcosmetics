import CrearProducto from "./components/sections/CrearProducto"; // descomentar para testearlo
import Administracion from "./components/pages/Administracion"; // descomentar para testearlo
import { RutaAplicacion } from "./rutas/RutaAplicacion";
import { Encabezado } from "./iu/Encabezado";

const RollingCosmeticsApp = () => {
  return (
    <>
      <Encabezado />
      <RutaAplicacion />
      {/* <CrearProducto />
      <Administracion /> */}
    </>
  );
};

export default RollingCosmeticsApp;
