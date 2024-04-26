import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Página de Inicio</h1>
      <Link to="/login">Iniciar Sesión</Link>
      <Link to="/registro">Registrarse</Link>
      <Link to="/recuperar-contraseña">Recuperar Contraseña</Link>
    </div>
  );
};

export default Home;
