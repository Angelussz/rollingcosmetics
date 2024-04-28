

const Nosotros = () => {
    return (
        <div>
            <section className="container my-5">
                <article className="text-center">
                    <h1 className="my-5">¿Quiénes somos?</h1>
                    <p>
                        Somos los integrantes del grupo Nº2 de la comisión 80i. Para nuestro último proyecto elegimos la temática: Cosméticos, ya que es un área donde se vende bastante 👀 <br />
                        A continuación les presentamos una breve descripción de cada uno de los integrantes de este proyecto:
                    </p>
                </article>
                <article className="d-flex justify-content-between row">
                    <div className="text-center col-sm-12 col-md-6 col-lg-4">
                        <img src="" alt="Juan" className="" />
                        <div>
                            <h5>Juan Illa</h5>
                            <p className="text-center text-break my-0">Edad: 25 años</p>
                            <p className="text-center text-break my-0">
                                Estudiante de &quot;Tecnicatura Universitaria en Desarrollo de Software&quot;
                            </p>
                            <p className="text-center text-break">Hobbie: Programación</p>
                        </div>
                    </div>
                    <div className="text-center col-sm-12 col-md-6 col-lg-4">
                        <img src="" alt="Facundo" className="" />
                        <div>
                            <h5>Facundo Palacios</h5>
                            <p className="text-center text-break my-0">Edad:  años</p>
                            <p className="text-center text-break my-0"></p>
                            <p className="text-center text-break">Hobbie: </p>
                        </div>
                    </div>
                    <div className="text-center col-sm-12 col-md-6 col-lg-4">
                        <img src="" alt="Ángelo" className="" />
                        <div>
                            <h5>Ángelo Pérez</h5>
                            <p className="text-center text-break my-0">Edad:  años</p>
                            <p className="text-center text-break my-0"></p>
                            <p className="text-center text-break">Hobbie:</p>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    );
};

export default Nosotros;