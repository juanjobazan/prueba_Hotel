import Image from 'react-bootstrap/Image';


const ImagesC = ({arrayHabi}) => {
  return (
  <>
  <div className='my-3 '>
  {
    arrayHabi.map((habi)=>
    
    <Image key={habi.fluid} src={habi.destacado==true ?habi.imagen : ""} fluid />

  
  )
  }
  </div>


  </>
  )
}

export default ImagesC
