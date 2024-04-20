import CrearProducto from "./components/sections/CrearProducto"; // descomentar para testearlo
import Administracion from "./components/pages/Administracion"; // descomentar para testearlo
import { RutaAplicacion } from "./rutas/RutaAplicacion";

const RollingCosmeticsApp = () => {
  return (
    <>
      <div>RollingCosmeticsApp</div>
      <RutaAplicacion />
      {/* <CrearProducto />
      <Administracion /> */}
    </>
  );
};

export default RollingCosmeticsApp;
