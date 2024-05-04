import { RutaAplicacion } from "./rutas/RutaAplicacion";
import { Encabezado } from "./iu/Encabezado";
import Navbarr from "./components/pages/Navbar";
import Footer from "./components/pages/Footer";
import { useContext } from "react";
import { AuthContext } from "./context";

const RollingCosmeticsApp = () => {
  const { usuarioActual } = useContext(AuthContext);
  return (
    <>
      <header style={{ position: "sticky", top: "0", zIndex: "10" }}>
        <Encabezado />
        <Navbarr />
      </header>
      <main>
        <RutaAplicacion />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default RollingCosmeticsApp;
