import Imagen from "/imagenes/error404.jpeg";
import { useNavigate } from "react-router";
import { Button } from "react-bootstrap";

const Error404 = () => {
    const navigate = useNavigate();

    return (
        <div>
            <article className="d-flex justify-content-center w-100 vh-100">
                <div className="d-flex flex-column text-center my-auto">
                    <img src={Imagen} alt="error404" className="img-thumbnail border-0" />
                    <div className="text-center">
                        <Button className="custom-button mt-5" onClick={()=>{ navigate("/") }}>
                            Volver al Inicio
                        </Button>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default Error404;