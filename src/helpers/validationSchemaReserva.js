import * as yup from 'yup'
const fecha = new Date

const userSchemaReserva = yup.object({
    inicio: yup.date().min(fecha, 'La fecha de Inicio NO puede ser Menor a la Actual').required('El campo Fecha de Inicio es obligatorio'),
    fin: yup.date().min(yup.ref('inicio'),'La fecha de Salida no Pude Ser Menor a la de ingreso').required('El Campo Fecha de finalizacion es obligatoria'),
});

export default userSchemaReserva;