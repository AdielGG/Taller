import { useState } from 'react'
import '../styles/juguetes.css'
import Juguete from '../components/Juguete'


export default function ProductPage () {
    const [search ,setSearch] = useState('')
    
    const getJuguetes = [
      {
        name: 'Juguete 1',
        description: 'Este es un juguete muy bonito',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      },
      {
        name: 'Juguete 2',
        description: 'Este es otro juguete muy bonito',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      },
      {
        name: 'Juguete 3',
        description: 'Este es un juguete muy bonito',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      },
    ]
    
    const [juguetes, setJuguetes] = useState([...getJuguetes])
    
    function vaciar() {
      setJuguetes([])
    }

    const buscar = () => {

      const result = []

      for ( let index = 0; index < getJuguetes.length; index++) {
        
        
        if (
          getJuguetes[index].name.toLowerCase().includes(search.toLowerCase()) 
          || getJuguetes[index].description.toLowerCase().includes(search.toLowerCase())
        ) {
           result.push(getJuguetes[index])
        }
      }

      setJuguetes(result)
      setSearch('')
    }
    
    const limpiar = () => {
      setSearch('')
      setJuguetes(getJuguetes.slice())
    }

    return (
      <>
        <h1>Juguetes</h1>
        <div className='search-container'>
          <input type='text' placeholder='Buscar juguetes'  value={search} onChange={e => setSearch(e.target.value)} />
          <button onClick={limpiar}>Limpiar</button>
          <button onClick={buscar} disabled={search.length === 0}>Buscar</button>

          
        </div>
        <div className='juge-container'>
          {juguetes.map((juguete, index) => (
            <Juguete juguete={juguete} key={index} />
            
            ))}
            {juguetes.length === 0 && <h2>No hay juguetes que coincidan con tu búsqueda</h2>}
        </div>

      </>
    )
  }