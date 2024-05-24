import { RutaAplicacion } from "./rutas/RutaAplicacion";
import { Encabezado } from "./iu/Encabezado";
import Navbarr from "./components/pages/Navbar";
import Footer from "./components/pages/Footer";
import { useContext } from "react";
import { AuthContext } from "./context";

const RollingCosmeticsApp = () => {
  const {usuarioActual} = useContext(AuthContext);
  return (
    <>
      <Encabezado />
      <Navbarr/>
      <RutaAplicacion />
      <Footer/>
      
    </>
  );
};

export default RollingCosmeticsApp;
