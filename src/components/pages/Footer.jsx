import { Link } from "react-router-dom";
import iconoFacebook from "../../../public/imagenes/facebookicon.png";
import iconoInstagram from "../../../public/imagenes/instagramicon.png";
import iconoTwitter from "../../../public/imagenes/twitterxicon.png";
import dataFiscal from "../../../public/imagenes/data-fiscal.png";
import logo from "../../../public/imagenes/rollingCosmeticsLogo2.png";
import "../../css/footer.css";


const Footer = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row pb-4 pt-5 custom-footer mt-5">
                    <div className="col-4">
                        <img src={logo} alt="Rolling Cosmetics" className="custom-logo" />
                    </div>
                    <div className="d-flex col-2 flex-column justify-content-center">
                        <Link to={"/"} className="text-decoration-none text-light custom-links">Inicio</Link>
                        <Link to={"/destacados"} className="text-decoration-none text-light custom-links">Destacados</Link>
                    </div>
                    <div className="d-flex col-2 flex-column justify-content-center">
                        <Link to={"/contacto"} className="text-decoration-none text-light custom-links">Contactanos</Link>
                        <Link to={"/nosotros"} className="text-decoration-none text-light custom-links">Acerca de Nosotros</Link>
                    </div>
                    <div className="col-4 d-flex flex-column justify-content-center text-light">
                        <div>
                            <p>
                                academy@rollingcodeschool.com <br />
                                +54 381 578-3030
                            </p>
                            <p>
                                Av. General Paz 576, <br />
                                Piso 9, oficina 2 <br />
                                San Miguel de Tucumán, Argentina
                            </p>
                        </div>
                        <div className="d-flex my-2 text-center">
                            <img src={dataFiscal} alt="Data Fiscal" className="col-sm-3 mt-4 custom-datafiscal" />
                            <div className="col-sm-8 mx-auto my-auto">
                                <Link to="https://www.facebook.com/RollingCodeSchool/" target="_blank" rel="noopener noreferrer">
                                    <img src={iconoFacebook} alt="Facebook" className="custom-icons me-3" />
                                </Link>
                                <Link to="https://www.instagram.com/rollingcodeschool/" target="_blank" rel="noopener noreferrer">
                                    <img src={iconoInstagram} alt="Instagram" className="custom-icons me-3" />
                                </Link>
                                <Link to="https://twitter.com/rollingcodeok/" target="_blank" rel="noopener noreferrer">
                                    <img src={iconoTwitter} alt="Twitter" className="custom-icons" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <p className="text-center py-3 custom-copyright">
                        &copy; Copyright 2024 RollingCosmetic - All Rights Reserved
                    </p>
                </div>
            </div>
        </>
    );
};

export default Footer;