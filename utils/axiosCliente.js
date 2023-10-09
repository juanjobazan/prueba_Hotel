
import axios  from "axios";

const token = JSON.parse(localStorage.getItem('token'))

const clienteAxios = axios.create({
    baseURL: 'http://localhost:3000/api'
    /* baseURL: 'http://vercel:8080/api' */

})

export const config ={
    headers:{
        'content-type':'application/json',
        'auth': `Bearer ${token}`
       }
}

export default clienteAxios