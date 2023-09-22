import * as yup from 'yup'

const userSchemaRegister = yup.object({
    user: yup.string().min(4,'El minimo es de 4 caracteres').max(18, 'El Maximo es de 18 Caracteres').required('El Usuario es Obligatorio'),
    password: yup.string().min(8, 'El Minimo es de 8 caracteres').max(18, 'El Maximo es de 18 Caracteres').required('La Contraseña es Requerida'),
    rpassword: yup.string().min(8, 'El Mino es de 8 Caracteres').max(18, 'El Maximo es de 18 Caracteres').required('La Repeticion de Contraseña es Requerida'),
    email: yup.string().required('La Direccion de correo es necesaria').email('La Direccion de Correo es Invalida')
});

export default userSchemaRegister;