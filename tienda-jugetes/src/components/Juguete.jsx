import '../styles/juguetes.css'

export default function Juguete ({ juguete }) {
    return (
      <div className='juguete'>
        <img src={juguete.image} alt={juguete.name} />
        <h2>{juguete.name}</h2>
        <p>{juguete.description}</p>
      </div>
    )
  }