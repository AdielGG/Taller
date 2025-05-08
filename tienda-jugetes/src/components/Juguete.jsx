import '../styles/juguetes.css'
import router from '../router/Router'

export default function Juguete ({ juguete }) {
    return (
      <div className='juguete'>
        <img src={juguete.image} alt={juguete.name} />
        <h2>{juguete.name}</h2>
        <p>{juguete.description}</p>
        <button onClick={() => router.navigate(`/products/${juguete.id}`)}>Ver más</button>
      </div>
    )
  }