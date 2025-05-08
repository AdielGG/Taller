import { useState } from 'react'
import router from '../router/Router'

export default function Page404 () {
    
    return (
      <>
        <div className='center-content'>
          <h1>404 - Página no encontrada</h1>
          <p>La página que estás buscando no existe</p>
          <img src='img/404.gif' alt='404' style={{ width: '100%' }} />
          <button onClick={() => router.navigate('/') }>Volver al inicio</button>
        </div>
      </>
    )
  }