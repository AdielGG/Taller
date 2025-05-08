import '../../styles/juguetes.css'
import router from '../../router/Router'
import { useProductDispatch,useProducts } from "./ProductContext"

export default function Juguete ({ juguete }) {
  const dispatch = useProductDispatch()

  function addToCart() {
    dispatch({ type: "add_to_cart", payload: juguete })
  }
  
  return (
      <div className='juguete'>
        <img src={juguete.image} alt={juguete.name} />
        <h2>{juguete.name}</h2>
        <p>{juguete.description}</p>
        <button onClick={() => router.navigate(`/products/${juguete.id}`)}>Ver más</button>
        <button onClick={() => addToCart()}>Añadir al carrito</button>
      </div>
    )
  }