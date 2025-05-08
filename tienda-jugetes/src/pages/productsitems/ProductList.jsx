import { useState , useEffect} from "react"
import {  useProducts } from "./ProductContext"
import Juguete from "./Juguete"
import Carrito from "./Carrito"
import axios from "axios"



export default function ProductList () {

    const [search ,setSearch] = useState('')
    const casrtList = useProducts()
    const [listaJuguetes, setListaJuguetes] = useState([])
    const [juguetes, setJuguetes] = useState([])

    async function obtenerjuguetes() {
      return await axios.get('http://127.0.0.1:8080/products').then(res => res.data)
    }

    
    useEffect(()=>{
      obtenerjuguetes().then(res => {
        setListaJuguetes([...res])
        setJuguetes([...res])
      })
      
    },[])
   

    const buscar = () => {

      const result = []

      for ( let index = 0; index < listaJuguetes.length; index++) {
        
        
        if (
          listaJuguetes[index].name.toLowerCase().includes(search.toLowerCase()) 
          || listaJuguetes[index].description.toLowerCase().includes(search.toLowerCase())
        ) {
           result.push(listaJuguetes[index])
        }
      }

      setJuguetes(result)
      setSearch('')
    }
    
    const limpiar = () => {
      setSearch('')
      setJuguetes(listaJuguetes.slice())
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