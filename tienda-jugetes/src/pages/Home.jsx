import NavBar from '../components/NavBar'
import '../styles/home.css'

export default function HomePage () {
  const imgUrl = "img/carritofondo.png";
    return (
      <div className='home-container'>
        <NavBar />
        <h1>Bienvenidos a la tienda de juguetes</h1>
        <img src='img/portada.jpg' alt='tienda' style={{ width: '100%' }} />
      </div>
    )
  }