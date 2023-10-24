
import axios  from "axios";

const token = JSON.parse(localStorage.getItem('token'))

const clienteAxios = axios.create({
    baseURL:'localhost:3000/api'
    //baseURL: `${import.meta.env.VITE_URL_BACK_DEPLOY}/api` 
   

})

export const config ={
    headers:{
        'content-type':'application/json',
        'auth': `Bearer ${token}`
       }
}

export default clienteAxios