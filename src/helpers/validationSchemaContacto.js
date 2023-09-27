import * as yup from 'yup'

const userSchemaContacto = yup.object({
    nombre: yup.string().min(4,'El minimo es de 4 caracteres').max(30, 'El Maximo es de 30 Caracteres').required('El Usuario es Obligatorio'),
    email: yup.string().required('La Direccion de correo es necesaria').email('La Direccion de Correo es Invalida'),
    fono: yup.number().min(10,'El Minimo es de 10 carateres').required('El Telefono es Necesario'),
    motivo:yup.string().min(4,'El minimo es de 4 caracteres').max(30, 'El Maximo es de 30 Caracteres').required('El Motivo es Obligatorio'),
    tarea: yup.string().min(10,'El minimo es de 10 caracteres').max(250, 'El Maximo es de 150 Caracteres').required('La Descripcion es Obligatorio'),

});

export default userSchemaContacto;