import Swal from 'sweetalert2';
import '../css/User.css'
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ModalCS from '../components/ModalCS'
import { Button } from 'react-bootstrap';
import clienteAxios, { config } from '../../utils/axiosCliente';

const AdminServiPage = () => {
    const [allServi, setAllHabi] = useState([])
    const [refreshState, resRefreshState] = useState(false)

    const getAllServi = async () => {
        const res = await clienteAxios.get('/servicio',config)
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
           clienteAxios.delete(`/servicio/${id}`,config)
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
        getAllServi()

        resRefreshState(false)

    }, [refreshState])
    return (
        <>
            <div className="container main">
                <div>
                    <h1>ABM Servicios</h1>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Codigo</th>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>Precio</th>
                                <th>
                                    Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allServi.map((servi) =>
                                    <tr key={servi._id}>
                                        <td>{servi.codigo}</td>
                                        <td>{servi.nombre}</td>
                                        <td>{servi.descripcion}</td>
                                        <td>{servi.precio}</td>
                                        <td>
                                            <ModalCS idServi={servi._id} getAllServi={getAllServi} />
                                            <Button variant='danger' onClick={() => { handleClick(servi._id) }}>Eliminar</Button>
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

export default AdminServiPage
