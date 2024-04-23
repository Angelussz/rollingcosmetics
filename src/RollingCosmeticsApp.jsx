// import CrearProducto from "./components/sections/CrearProducto"; // descomentar para testearlo
// import Administracion from "./components/pages/Administracion"; // descomentar para testearlo
import { RutaAplicacion } from "./rutas/RutaAplicacion";
import Navbarr from "./components/pages/Navbar";

const RollingCosmeticsApp = () => {
  return (
    <>
      {/* <div>RollingCosmeticsApp</div> */}
      <Navbarr/>
      <RutaAplicacion />
      {/* <CrearProducto />
      <Administracion /> */}
      
    </>
  );
};

export default RollingCosmeticsApp;
