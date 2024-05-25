import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin  } from "react-icons/fa6";
import juan from "/imagenes/juan_illa.png";
import facundo from "/imagenes/facundo_palacios.png";
import angelo from "/imagenes/angelo_perez.png";
import "../../css/nosotros.css";


const Nosotros = () => {
    return (
        <div>
            <section className="container my-5">
                <article className="text-center custom-article p-4">
                    <h1>¿Quiénes somos?</h1>
                    <p>
                        Somos los integrantes del grupo Nº2 de la comisión 80i. Para nuestro último proyecto elegimos la temática: Cosméticos, ya que es un área donde se vende bastante 👀 <br />
                        A continuación les presentamos una breve descripción de cada uno de los integrantes de este proyecto:
                    </p>
                </article>
                <div className="custom-container__cards mt-2">
                    <div className="custom-card">
                        <div className="custom-cover">
                            <img src={facundo} alt="Facundo Palacios" />
                            <div className="custom-img__back"></div>
                        </div>
                        <div className="custom-description">
                            <h2 className="text-center mt-3">Facundo Palacios</h2>
                            <p className="py-3">
                                Soy estudiante de Ingeniería en Sistemas, apasionado por la programación en busca de mejorar mis habilidades en dicho campo.
                            </p>
                            <hr />
                            <div className="d-flex justify-content-evenly">
                                <Link to="https://github.com/FacuPalacios" target="_blank" rel="noopener noreferrer">
                                    <FaGithub className="custom-cards-icons custom-github" />
                                </Link>
                                <Link to="https://www.linkedin.com/in/facundopalacios/" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className="custom-cards-icons custom-linkedin" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="custom-card">
                        <div className="custom-cover">
                            <img src={angelo} alt="Ángelo Pérez" />
                            <div className="custom-img__back"></div>
                        </div>
                        <div className="custom-description">
                            <h2 className="text-center mt-3">Ángelo Pérez</h2>
                            <p className="py-3">
                                Soy egresado de la carrera Ciencias de la computación, autodidacta obligado por la vida y trato de mejorarme cada día o eso espero.
                            </p>
                            <hr />
                            <div className="d-flex justify-content-evenly">
                                <Link to="https://github.com/Angelussz" target="_blank" rel="noopener noreferrer">
                                    <FaGithub className="custom-cards-icons custom-github" />
                                </Link>
                                <Link to="https://www.linkedin.com/in/angelo-aldo-perez-rodriguez-4444371b1/" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className="custom-cards-icons custom-linkedin" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="custom-card">
                        <div className="custom-cover">
                            <img src={juan} alt="Juan Illa" />
                            <div className="custom-img__back"></div>
                        </div>
                        <div className="custom-description">
                            <h2 className="text-center mt-3">Juan Illa</h2>
                            <p className="py-3">
                                Soy estudiante de la carrera Tecnicatura en Desarrollo de Software, me encanta el desarrollo web y quiero trabajar de esto.
                            </p>
                            <hr />
                            <div className="d-flex justify-content-evenly">
                                <Link to="https://github.com/IllaJuan" target="_blank" rel="noopener noreferrer">
                                    <FaGithub className="custom-cards-icons custom-github" />
                                </Link>
                                <Link to="https://www.linkedin.com/in/illajuan/" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className="custom-cards-icons custom-linkedin" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div> 
            </section>
        </div>
    );
};

export default Nosotros;