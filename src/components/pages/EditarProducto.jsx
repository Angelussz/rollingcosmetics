/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from 'react-router';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import { useFormik } from "formik";
import Swal from 'sweetalert2';
import { clsx } from "clsx";
import * as Yup from "yup";
import axios from 'axios';

export const EditarProducto = () => {
    const API = import.meta.env.VITE_API;
    const navigate = useNavigate();
    const { id } = useParams(); 
    const [producto, setProducto] = useState();

    const getProducto = async () => {
        try {
            const { data } = await axios.get(`${API}/productos/${id}`);
            setProducto(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(()=>{
        getProducto();
    },[])

    useEffect(()=>{
        if (producto !== undefined) {
            formik.setFieldValue("categoria",producto.categoria, true); 
            formik.setFieldValue("nombre", producto.nombre, true);
            formik.setFieldValue("precio", producto.precio, true);
            formik.setFieldValue("stock", producto.stock, true);
            formik.setFieldValue("imagen", producto.imagen, true);
            formik.setFieldValue("descripcion", producto.descripcion, true);
        }
    },[producto])

    const ProductosSchema = Yup.object().shape(
        {
            categoria: Yup.string()
                .required("Debe elegir una categoría"),
            nombre: Yup.string()
                .trim()
                .min(2, "Debe ingresar al menos 2 caracteres")
                .max(30, "Debe ingresar máximo 30 caracteres")
                .required("Debe ingresar el nombre del producto"),
            precio: Yup.string()
                .trim()
                .matches(/^\d{1,3}(\.\d{3})*,\d{2}$/, "El formato del precio debe ser 'EJ: 4.000,00'")
                .test("es-numero", "El valor debe ser un número válido", value => {
                // Verifica que sea un número válido
                    const numero = Number(value.replace(/[.,]/g, ""));
                    return !isNaN(numero);
                })
                .min(1,"El valor mínimo que se le puede asignar a un producto es de $1")
                .max(11,"El valor máximo que se le puede asignar a un producto es de $999.999")
                .required("Debe ingresar el precio del producto"),
            stock: Yup.string()
                .min(1, "Debe haber mínimo 1 en stock")
                .max(4, "La cantidad máxima en stock para un producto es de 9999")
                .required("Debe ingresar la cantidad en stock del producto"),
            imagen: Yup.string()
                .trim()
                .url("Ingrese una URL válida")
                .min(10, "La URL debe tener al menos 10 caracteres")
                .max(400, "La URL excede el máximo de 400 caracteres permitido")
                .required("Debe ingresar la URL de la imagen"),
            descripcion: Yup.string()
                .trim()
                .min(3, "Debe ingresar al menos 3 caracteres")
                .max(100, "Debe ingresar máximo 100 caracteres")
                .required("Debe ingresar una descripción del producto")
        }
    );

    const initialValues = {
        categoria: "",         
        nombre: "",
        precio: "",
        stock: "",
        imagen: "",
        descripcion: ""
    };

    const formik = useFormik({
        initialValues,
        validationSchema: ProductosSchema,
        validateOnBlur: true,
        validateOnChange: true,
        onSubmit: (values) => {  
            try {
                Swal.fire({
                    title: "¿Desea editar el producto?",
                    icon: "question",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Guardar"
                }).then( async (result) => {
                    if (result.isConfirmed) {
                        const updateProduct = {
                            _id: producto._id,
                            categoria: values.categoria,         
                            nombre: values.nombre,
                            precio: values.precio,
                            stock: values.stock,
                            imagen: values.imagen,
                            descripcion: values.descripcion
                        };

                        const response = await axios.put(`${API}/productos/editar`, updateProduct);

                        if (response.status === 200) {  
                            Swal.fire({
                                title: "Producto editado",
                                text: "¡El producto ha sido editado correctamente!",
                                icon: "success",
                                showConfirmButton: false,
                                timer: 2000
                            });
                            navigate("/administracion");
                        }
                    }
                });
            } catch (error) {
                console.error("Error ---->",error);
            }
        }
    });


    return (
        <div className="container-sm py-5">
            <Button 
                variant="secondary" 
                onClick={()=>
                    navigate(-1)   
                }
            >
                Atrás
            </Button>
            <h1 className="display-5 text-center">Editar Producto</h1>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3" controlId="categoriaProducto">
                    <Form.Label>Categoría:</Form.Label>
                    <Form.Select 
                        aria-label="categoria" 
                        name="categoria"
                        {...formik.getFieldProps("categoria")}  
                        className={clsx("form-control",
                        {
                            "is-invalid": formik.touched.categoria && formik.errors.categoria,
                        },
                        {
                            "is-valid": formik.touched.categoria && !formik.errors.categoria,  
                        }
                        )}
                    >
                        <option value="">Elija una categoría</option>
                        <option value="cabello">Cabello</option>
                        <option value="rostro">Rostro</option>
                        <option value="cuerpo">Cuerpo</option>
                        <option value="perfumeria">Perfumeria</option>
                    </Form.Select>
                    {formik.touched.categoria && formik.errors.categoria && (
                            <div className="text-danger">
                                <span role="alert">{formik.errors.categoria}</span>
                            </div>
                    )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="nombreProducto">
                    <Form.Label>Nombre del Producto:</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Ingrese el nombre del producto" 
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
                <Form.Group className="mb-3" controlId="precioProducto">
                    <Form.Label>Precio del Producto:</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Ingrese el precio del producto" 
                        minLength={1} 
                        maxLength={11} 
                        name="precio"
                        {...formik.getFieldProps("precio")}
                        className={clsx("form-control",
                        {
                            "is-invalid": formik.touched.precio && formik.errors.precio,
                        },
                        {
                            "is-valid": formik.touched.precio && !formik.errors.precio,
                        }
                        )}
                    />
                        {formik.touched.precio && formik.errors.precio && (
                            <div className="text-danger">
                                <span role="alert">{formik.errors.precio}</span>
                            </div>
                        )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="stockProducto">
                    <Form.Label>Cantidad en stock:</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Ingrese el stock del producto" 
                        minLength={1} 
                        maxLength={4} 
                        name="stock"
                        {...formik.getFieldProps("stock")}
                        className={clsx("form-control",
                        {
                            "is-invalid": formik.touched.stock && formik.errors.stock,
                        },
                        {
                            "is-valid": formik.touched.stock && !formik.errors.stock,
                        }
                        )}
                    />
                        {formik.touched.stock && formik.errors.stock && (
                            <div className="text-danger">
                                <span role="alert">{formik.errors.stock}</span>
                            </div>
                        )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="imagenProducto">
                    <Form.Label>URL de la imagen del producto:</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Ingrese la dirección de la imagen" 
                        minLength={10} 
                        maxLength={400} 
                        name="imagen"
                        {...formik.getFieldProps("imagen")}
                        className={clsx("form-control",
                        {
                            "is-invalid": formik.touched.imagen && formik.errors.imagen,
                        },
                        {
                            "is-valid": formik.touched.imagen && !formik.errors.imagen,
                        }
                        )}
                    />
                        {formik.touched.imagen && formik.errors.imagen && (
                            <div className="text-danger">
                                <span role="alert">{formik.errors.imagen}</span>
                            </div>
                        )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="descripcionProducto">
                    <Form.Label>Descripción del Producto:</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={3} 
                        placeholder="Ingrese la descripción del producto" 
                        minLength={3} 
                        maxLength={100}
                        name="descripcion"
                        {...formik.getFieldProps("descripcion")}
                        className={clsx("form-control",
                        {
                            "is-invalid": formik.touched.descripcion && formik.errors.descripcion,
                        },
                        {
                            "is-valid": formik.touched.descripcion && !formik.errors.descripcion,
                        }
                        )}
                    />
                        {formik.touched.descripcion && formik.errors.descripcion && (
                            <div className="text-danger">
                                <span role="alert">{formik.errors.descripcion}</span>
                            </div>
                        )}
                </Form.Group>
                <div className="text-center">
                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                </div>
            </Form>
        </div>
    );
};
