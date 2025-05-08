import NavBar from '../components/NavBar'
import '../styles/home.css'

export default function HomePage () {
    return (
      <div className='home-container'>
        <NavBar />
        <h1>Home</h1>
        <p>Esta es una página de ejemplo para crear un React Router desde cero</p>
      </div>
    )
  }