import '../css/HomePage.css'
import React, { useEffect } from 'react'
import CardsC from '../components/CardsC'
import { Container, Row } from 'react-bootstrap'
import ImagesC from '../components/ImagesC'
import ServC from '../components/ServC'
import axios from 'axios'
import { useState } from 'react'
import clienteAxios, { config } from '../../utils/axiosCliente'

const HomePage = () => {
  const [habi,setHabis]=useState([])
  const [servi,setServis]=useState([])
  
  const getstoreApi =async()=>{
    
    const res = await clienteAxios.get('/habitacion',config)
    setHabis(res.data)
  }
  const getServicio=async()=>{
    const res = await  clienteAxios.get('/servicio',config)
    setServis(res.data)
  }
  useEffect(()=>{
    getstoreApi()
  },[])
  useEffect(()=>{
    getServicio()
  },[])
  return (
    <>
      <Container className='main'>
        <Row>
          <hr />
          <h1 className='text-center my-2 mx-2 py-2 '>Hotel Nossa</h1>
          <hr />
          <h4 className='text-center my-3 mx-1 py-2'>Hotel Nossa Tucuman, Tafi del Valle | Argentina </h4>
          <hr />
          <p className='start my-3 mx-3 py-3 px-5'>El Nossa Tafi del Valle de 5 estrellas presenta una arquitectura clásica y ofrece jardines hermosos y vistas
            panorámicas en un ambiente tranquilo.
            El club de bienestar y spa tiene pileta cubierta, gimnasio, sauna y solárium. Hay masajes, shiatsu, entrenador personal y 
            otros servicios disponibles a pedido.
            El Nossa dispone de 2 bares y de 2 restaurantes famosos por su sabrosa carne a la parrilla y platos mediterráneos.
            El hotel se encuentra en el tradicional circuito del Cerro el Palao, cerca de los artesanos, fabricas de quesos.</p>
            <hr />
          <h4 className='text-center my-3 py-3'>Fotos del Nossa </h4>
          <ImagesC arrayHabi={habi}  />
          <hr />
          <h4 className='text-center my-3 py-3'>Habitaciones</h4>
          <CardsC arrayHabi={habi} />
          <h4 className='text-center my-3 py-3'>Servicios</h4>
          <ServC arraySer={servi}/>
          <hr />
        </Row>
      </Container>
    </>
  )
}

export default HomePage
