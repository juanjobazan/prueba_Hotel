import Swal from 'sweetalert2';
import '../css/User.css'
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ModalC from '../components/ModalC';
import { Button } from 'react-bootstrap';
import clienteAxios, { config } from '../../utils/axiosCliente';

const AdminHabiPage = () => {
    const [allHabi, setAllHabi] = useState([])
    const [refreshState, resRefreshState] = useState(false)

    const getAllHabi = async () => {
        const res = await clienteAxios.get('http://localhost:3000/api/habitacion',config)
        setAllHabi(res.data)
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
           clienteAxios.delete(`/habitacion/${id}`,config)
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

        resRefreshState(false)
    
      }, [refreshState])
  return (
   <>
   <div className="container main">
   <div>
          <h1>ABM Habitaciones</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Numero</th>
                <th>Nombre</th>
                <th>Descripcion - Capacidad</th>
                <th>Precio</th>
                <th>
                Acciones
                </th>
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
                    <td>
                    <ModalC idHabi={habi._id} getAllHabi={getAllHabi}/>
                    <Button variant='danger' onClick={()=>{handleClick(habi._id)}}>Eliminar</Button>
                    </td>
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

export default AdminHabiPage
