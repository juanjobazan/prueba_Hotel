import Image from 'react-bootstrap/Image';


const ImagesC = ({arrayHabi}) => {
  return (
  <>
  {
    arrayHabi.map((habi)=>
    <Image key={habi.fluid} src={habi.imagen} fluid />

  
  )
  }

  </>
  )
}

export default ImagesC
