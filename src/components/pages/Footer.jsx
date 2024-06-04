import { Link } from "react-router-dom";
import iconoFacebook from "/imagenes/facebookicon.png";
import iconoInstagram from "/imagenes/instagramicon.png";
import iconoTwitter from "/imagenes/twitterxicon.png";
import dataFiscal from "/imagenes/data-fiscal.png";
import logo from "/imagenes/rollingCosmeticsLogo2.png";
import "../../css/footer.css";


const Footer = () => {
    return (
        <>
            <div className="">
                <div className="row pb-4 pt-lg-5 custom-footer mt-5">
                    <div className="d-flex col-lg-4 justify-content-center">
                        <Link to={"/"} className="text-decoration-none text-light custom-links mb-2">
                            <img src={logo} alt="Rolling Cosmetics" className="custom-logo my-auto" />
                        </Link>
                    </div>
                    <div className="d-flex col-lg-2 flex-column justify-content-center text-center text-lg-start">
                        <Link to={"/"} className="text-decoration-none text-light custom-links mb-2">Inicio</Link>
                        <Link to={"/destacados"} className="text-decoration-none text-light custom-links mb-2">Destacados</Link>
                    </div>
                    <div className="d-flex col-lg-2 flex-column justify-content-center text-center text-lg-start">
                        <Link to={"/contacto"} className="text-decoration-none text-light custom-links mb-2">Contactanos</Link>
                        <Link to={"/nosotros"} className="text-decoration-none text-light custom-links mb-5 mb-lg-2">Acerca de Nosotros</Link>
                    </div>
                    <div className="col-lg-4 flex-column justify-content-center text-light text-center text-lg-start">
                        <div className="mb-5 mb-lg-0">
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
                        <div className="d-flex my-2 text-lg-center justify-content-evenly mb-4 mb-lg-0">
                            <img src={dataFiscal} alt="Data Fiscal" className="d-none d-sm-block col-xl-4 mt-lg-4 custom-datafiscal" />
                            <div className="col-xl-8 mx-lg-auto my-sm-auto">
                                <Link to="https://www.facebook.com/RollingCodeSchool/" target="_blank" rel="noopener noreferrer" className="ms-lg-3">
                                    <img src={iconoFacebook} alt="Facebook" className="custom-icons me-3" />
                                </Link>
                                <Link to="https://www.instagram.com/rollingcodeschool/" target="_blank" rel="noopener noreferrer">
                                    <img src={iconoInstagram} alt="Instagram" className="custom-icons me-3" />
                                </Link>
                                <Link to="https://twitter.com/rollingcodeok/" target="_blank" rel="noopener noreferrer" className="d-lg-flex d-xl-inline-block justify-content-lg-center justify-content-xl-start mt-lg-2 mt-xl-0">
                                    <img src={iconoTwitter} alt="Twitter" className="custom-icons" />
                                </Link>
                            </div>
                        </div>
                        <img src={dataFiscal} alt="Data Fiscal" className="d-sm-none mb-5 custom-datafiscal" />
                    </div>
                </div>
                <div className="foot">
                    <p className="text-center py-3 custom-copyright">
                        &copy; Copyright 2024 RollingCosmetic - All Rights Reserved
                    </p>
                </div>
            </div>
        </>
    );
};

export default Footer;
