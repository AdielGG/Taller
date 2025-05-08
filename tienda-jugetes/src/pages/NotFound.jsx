import router from '../router/Router'
import "../styles/home.css";

export default function Page404 () {
    
    return (
      
        <div className='home-container'>
          <h1>404 - Página no encontrada</h1>
          <h2>La página que estás buscando no existe <button onClick={() => router.navigate('/') }>Volver al inicio</button></h2>
          <img src='img/404.gif' alt='404' style={{ width: '40%' }} />
          
        </div>
    
    )
  }