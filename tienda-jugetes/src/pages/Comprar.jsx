import router from '../router/Router'
import { useState } from 'react'
import { cleanCartList, getCartList } from '../temp/casrtList.temp'
import '../styles/comprar.css'
import '../styles/home.css'

export default function Comprar () {


    const  [list , setList] = useState( getCartList() )
    
    cleanCartList()

    if(list.length === 0) {
        alert('No hay productos en la lista')
        router.navigate('/products')
    }

    function RealizarCompra() {
        if( confirm('¿Desea Comprar estos productos?') ) {
            
            alert('Compra realizada con exito')
            cleanCartList()
            router.navigate('/products')
            return
        }
        
    }

  return (
    <div className='home-container'>
      <h1>Lista de Compras</h1>
      <div className='lista-compra'>
        {list.map((juguete, index) => (
          <div className='juguete' key={index}>
            <h2>{juguete.name}</h2>
            <p>{juguete.description}</p>
            <img src={juguete.image} alt={juguete.name} />
            <button 
                onClick={() => 
                    setList(list.filter((item) => item.id !== juguete.id))
                }
            >Eliminar</button>
          </div>
        ))}
      </div>
      <button onClick={RealizarCompra}>Comprar</button>
      <button onClick={() => router.navigate('/products')}>Volver</button>
    </div>
  )
}