import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { clsx } from "clsx";
import * as Yup from "yup";
import { useFormik } from "formik";
import Swal from 'sweetalert2';

export const Contacto = () => {
  const ContactoSchema = Yup.object().shape(
    {
        nombre: Yup.string()
            .trim()
            .matches(/^[a-zA-Z]+$/, "Debe ingresar solo letras")
            .min(2, "Debe ingresar al menos 2 caracteres")
            .max(30, "Debe ingresar máximo 30 caracteres")
            .required("Debe ingresar su nombre"),
        email: Yup.string()
            .email("Debe ingresar un correo válido")
            .min(10,"Su correo debe tener un mínimo de 10 caracteres")
            .max(120,"Su correo debe tener un máximo de 120 caracteres")
            .required("Debe ingresar su correo electrónico"),
        consulta: Yup.string()
            .trim()
            .min(10, "Debe ingresar al menos 10 caracteres")
            .max(100, "Debe ingresar máximo 100 caracteres")
            .required("Debe ingresar la consulta")
    }
  );

  const initialValues = {   
      nombre: "",
      email:"",
      consulta: ""
  };

  const formik = useFormik({
    initialValues,
    validationSchema: ContactoSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: () => {  
          formik.resetForm();   
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Consulta enviada",
            text: "Nos contactaremos con usted a la brevedad",
            showConfirmButton: false,
            timer: 3000
          });
    }
  });


  return (
        <section className="container-lg mb-4">
            <article className="row bg-gradient m-2 m-sm-4 p-2 p-sm-4 rounded shadow">
              <h1 className="display-3 fw-light text-center my-4">Contacto</h1>
                <div className="col-md-6 mt-2 mb-2 p-3">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.0614255919154!2d-65.26327859999999!3d-26.806172699999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d21e9df306f%3A0xfb39f7d2f19ebe3!2sAv.%20Juan%20Domingo%20Per%C3%B3n%20123%2C%20Yerba%20Buena%2C%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1705174657303!5m2!1ses-419!2sar" className="w-100 h-100" width="600" height="450">
                    </iframe>
                </div>
                <div className="col-md-6 mt-3 mt-md-0 mb-4">
                  <Form onSubmit={formik.handleSubmit}>
                        <Form.Group className="mb-3" controlId="nombre">
                          <Form.Label>Nombre:</Form.Label>
                          <Form.Control 
                              type="text" 
                              placeholder="Ingrese su nombre" 
                              minLength={2} 
                              maxLength={30} 
                              name="nombre"
                              {...formik.getFieldProps("nombre")}
                              className={clsx("form-control",
                              {
                                  "is-invalid": formik.touched.nombre && formik.errors.nombre,
                              },
                              {
                                  "is-valid": formik.touched.nombre && !formik.errors.nombre,
                              }
                              )}
                          />
                              {formik.touched.nombre && formik.errors.nombre && (
                                  <div className="text-danger">
                                      <span role="alert">{formik.errors.nombre}</span>
                                  </div>
                              )}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Correo electrónico</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Ingrese su email" 
                                minLength={10} 
                                maxLength={120} 
                                name="email"
                                {...formik.getFieldProps("email")}
                                className={clsx("form-control",
                                {
                                    "is-invalid": formik.touched.email && formik.errors.email,
                                },
                                {
                                    "is-valid": formik.touched.email && !formik.errors.email,
                                }
                                )}
                            />
                            {formik.touched.email && formik.errors.email && (
                                <div className="text-danger">
                                    <span role="alert">{formik.errors.email}</span>
                                </div>
                            )}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="consulta">
                          <Form.Label>Consulta:</Form.Label>
                          <Form.Control 
                              as="textarea" 
                              rows={3} 
                              placeholder="Ingrese su consulta" 
                              minLength={10} 
                              maxLength={100}
                              name="consulta"
                              {...formik.getFieldProps("consulta")}
                              className={clsx("form-control",
                              {
                                  "is-invalid": formik.touched.consulta && formik.errors.consulta,
                              },
                              {
                                  "is-valid": formik.touched.consulta && !formik.errors.consulta,
                              }
                              ,"custom-textarea")}
                          />
                              {formik.touched.consulta && formik.errors.consulta && (
                                  <div className="text-danger">
                                      <span role="alert">{formik.errors.consulta}</span>
                                  </div>
                              )}
                         </Form.Group>
                        <div className="d-flex justify-content-center justify-content-md-start">
                          <Button type="submit" variant="primary" className="custom-button mx-2">
                              Enviar
                          </Button>
                        </div>
                    </Form>
                </div>
            </article>
        </section>
  )
}
