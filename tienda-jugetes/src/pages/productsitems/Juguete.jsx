import '../../styles/juguetes.css'
import { useProductDispatch } from "./ProductContext"

export default function Juguete ({ juguete }) {
  const dispatch = useProductDispatch()
  const url = "http://127.0.0.1:8080" + juguete.image.substring(8)
  function addToCart() {
    dispatch({ type: "add_to_cart", payload: juguete })
  }
  
  return (
      <div className='juguete'>
        <img src={url} alt={juguete.name} />
        <h2>{juguete.name}</h2>
        <h2>{juguete.price}</h2>
        <p>{juguete.description}</p>
        {/* <button onClick={() => router.navigate(`/products/${juguete.id}`)}>Ver más</button> */}
        <button onClick={() => addToCart()}>Añadir al carrito</button>
      </div>
    )
  }