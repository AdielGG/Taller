import { useState , useContext} from "react"
import { useProductDispatch, useProducts } from "./ProductContext"
import Juguete from "./Juguete"
import Carrito from "./Carrito"

export default function ProductList () {
    const [search ,setSearch] = useState('')
    const casrtList = useProducts()
    const getJuguetes = [
      {
        id: 1,
        name: 'Juguete 1',
        description: 'Este es un juguete muy bonito',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      },
      {
        id: 2,
        name: 'Juguete 2',
        description: 'Este es otro juguete muy bonito',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufB8fHx8&auto=format&fit=crop&w=687&q=80',
      },
      {
        id: 3,
        name: 'Juguete 3',
        description: 'Este es un juguete muy bonito',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      },
    ]
    
    const [juguetes, setJuguetes] = useState([...getJuguetes])
    
   

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
      <div className='home-container'>
        {casrtList.length > 0 && <Carrito />}
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

      </div>
    )
  }     