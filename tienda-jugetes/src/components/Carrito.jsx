import '../styles/carrito.css'

export default function Carrito () {

    const imgUrl = "img/carrito.png";

    return (
      <div className='btn-flotante'>
        <img src={imgUrl} alt="carrito" width={45} height={45} /> 
      </div>
    )
  }