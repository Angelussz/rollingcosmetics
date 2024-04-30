// import CrearProducto from "./components/sections/CrearProducto"; // descomentar para testearlo
// import Administracion from "./components/pages/Administracion"; // descomentar para testearlo
import { RutaAplicacion } from "./rutas/RutaAplicacion";
import { Encabezado } from "./iu/Encabezado";
import Navbarr from "./components/pages/Navbar";
import Footer from "./components/pages/Footer";
import { useContext } from "react";
import { AuthContext } from "./context";

const RollingCosmeticsApp = () => {
  const {usuarioActual} = useContext(AuthContext);
  console.log(usuarioActual)
  return (
    <>
      <Encabezado />
      <Navbarr/>
      <RutaAplicacion />
      {/* <CrearProducto />
      <Administracion /> */}
      <Footer/>
      
    </>
  );
};

export default RollingCosmeticsApp;
