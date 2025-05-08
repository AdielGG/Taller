import '../../styles/carrito.css'
import { useProducts } from './ProductContext';
import { setCartList } from '../../temp/casrtList.temp';
import  router  from '../../router/Router';

export default function Carrito () {
    const lista = useProducts()
    const imgUrl = "img/carrito.png";
    function Comprar(){
      setCartList(lista)
      router.navigate('/comprar')
    }

    return (
      <button onClick={Comprar} className='btn-flotante'>
        <img src={imgUrl} alt="carrito" width={45} height={45} /> 
      </button>
    )
  }