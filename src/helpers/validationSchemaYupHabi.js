import * as yup from 'yup'


const habiSchema = yup.object({
    numero: yup.number().required('El Usuario es Obligatorio'),
    nombre: yup.string().max(60,'El Minimo es de 60 carateres').required('EL monbre de la Habitacion es Necesario'),
    descripcion: yup.string().min(10,'El Minimo es de 10 carateres').max(100,'El Minimo es de 100 carateres').required('La Descripcion de la Habitacion es Necesaria'),
    capacidad:yup.number().required('El Motivo es Obligatorio'),
    precio: yup.number().required('La Descripcion es Obligatorio'),

});

export default habiSchema;