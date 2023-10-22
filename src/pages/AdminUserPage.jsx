import Swal from 'sweetalert2';
import '../css/User.css'
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ModalCU from '../components/ModalCU';
import { Button } from 'react-bootstrap';

const AdminUserPage = () => {
    const [allUser, setAllUser] = useState([])
  const [refreshState, resRefreshState] = useState(false)
  const getAllUsu = async () => {
    const res = await axios.get('http://localhost:3000/api/user')
    setAllUser(res.data)
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
       axios.delete(`http://localhost:3000/api/user/${id}`)
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
    
    getAllUsu()
  
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
                <th>Acciones</th>
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
                    <td>
                      <ModalCU idUsu={usu._id} getAllUsu={getAllUsu} />
                      <Button variant='danger' onClick={() => { handleClick(usu._id) }}>Eliminar</Button>
                    </td>
                  </tr>
                )
              }


            </tbody>
            </Table>
            </div>
            </div>
   </>
  )
}

export default AdminUserPage
