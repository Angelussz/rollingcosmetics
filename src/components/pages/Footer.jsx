const Footer = () => {
  return (
    <div className="container-fluid bg-danger text-dark p-5">
      <div className="row">
        <p className="col-sm-12 col-md-6 col-lg-4 text-center">
          {" "}
          <img src="/public/imagenes/rollingCosmeticsLogo2.png" alt="" />
        </p>
        <div className="col-sm-12 col-md-6 col-lg-4 text-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Destacado
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Contacto
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Favoritos
              </a>
            </li>
          </ul>
        </div>
        <p className="col-sm-12 col-md-6 col-lg-4 text-center">
          <img src="/public/imagenes/facebookicon.png" alt="" />
          <img src="/public/imagenes/instagramicon.png" alt="" />
          <img src="/public/imagenes/twitterxicon.png" alt="" />
        </p>
      </div>
      <p className="text-center">&copy;Todos los derechos reservados</p>
    </div>
  );
};

export default Footer;
