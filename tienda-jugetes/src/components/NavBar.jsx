import '../styles/navbar.css'
export default function NavBar () {
    return (
      <nav className='navbar'>
        <ul>
          <li><a href='/'>Inicio</a></li>
          <li><a href='/products'>Juguetes</a></li>
          <li><a href='/about'>Sobre nosotros</a></li>
        </ul>
      </nav>
    )
  }