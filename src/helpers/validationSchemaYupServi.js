import * as yup from 'yup'


const serviSchema = yup.object({
    codigo: yup.number().required('El Codigo es Obligatorio'),
    nombre: yup.string().max(60,'El Minimo es de 60 carateres').required('EL monbre del Servicio es Necesario'),
    descripcion: yup.string().min(10,'El Minimo es de 10 carateres').max(100,'El Minimo es de 100 carateres').required('La Descripcion del Servicio es Necesario'),
    precio: yup.number().required('El Precio es Obligatorio'),

});

export default serviSchema;