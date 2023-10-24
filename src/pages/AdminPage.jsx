import Swal from 'sweetalert2';
import '../css/User.css'
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ModalC from '../components/ModalC';
import { Button } from 'react-bootstrap';
import clienteAxios, { config } from '../../utils/axiosCliente';


const AdminPage = () => {

  const [allHabi, setAllHabi] = useState([])
  const [allServi, setAllServi] = useState([])
  const [allUser, setAllUser] = useState([])
  const [refreshState, resRefreshState] = useState(false)

  const getAllHabi = async () => {
    const res = await clienteAxios.get('/habitacion',config)
    setAllHabi(res.data)
  }
  const getAllUsu = async () => {
    const res = await clienteAxios.get('/user',config)
    setAllUser(res.data)
  }
  const getAllservi =async()=>{
    const res = await clienteAxios.get('/servicio',config)
    setAllServi(res.data)
  
  }

  const handleClick = async (id) => {
  
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Estas Seguro?',
      text: "No podras Revertir Esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'SI, Eliminar!',
      cancelButtonText: 'No, Cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
       axios.delete(`http://localhost:3000/api/habitacion/${id}`)
        .then(res=>{
          if(res.status === 200 ){
            swalWithBootstrapButtons.fire(
              'Eliminado!',
              res.data.msg,
              'success' 
            )
            }
        })
       
       

        resRefreshState(true)
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Esta Informacion NO se Elimino :)',
          'error'
        )
      }
    })


  

  }

  useEffect(() => {
    getAllHabi()
    getAllUsu()
    getAllservi()
    resRefreshState(false)

  }, [refreshState])

  return (
    <>
      <div className="container main">
        <div>
          <h1>ABM Usuarios</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Usuario</th>
                <th>Correo</th>
                <th>Roll</th>
              
              </tr>
            </thead>
            <tbody>
              {
                allUser.map((usu) =>
                  <tr key={usu._id}>
                    <td>{usu._id}</td>
                    <td>{usu.user}</td>
                    <td>{usu.email}</td>
                    <td>{usu.role}</td>
                    
                  </tr>
                )
              }


            </tbody>
          </Table>
        </div>
        <hr />
        <div>
          <h1>ABM Habitaciones</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Numero</th>
                <th>Nombre</th>
                <th>Descripcion - Capacidad</th>
                <th>Precio</th>
               
              </tr>
            </thead>
            <tbody>
              {
                allHabi.map((habi) =>
                  <tr key={habi._id}>
                    <td>{habi.numero}</td>
                    <td>{habi.nombre}</td>
                    <td>{habi.descripcion} - {habi.capacidad}</td>
                    <td>{habi.precio}</td>
                    
                  </tr>
                )
              }



            </tbody>
          </Table>
        </div>
        <hr />
        <div>
          <h1>ABM Servicios</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Codigo</th>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Precio</th>
                
              </tr>
            </thead>
            <tbody>
              {
                allServi.map((servi)=>
                <tr key={servi._id}>
                <td>{servi.codigo}</td>
                <td>{servi.nombre}</td>
                <td>{servi.descripcion}</td>
                <td>{servi.precio}</td>
               
              </tr>
              )
              }
              
              

            </tbody>
          </Table>
        </div>
        <hr />
      </div>
    </>
  )
}

export default AdminPage
