import NavBar from '../components/NavBar'
import ProductList from './productsitems/ProductList'
import ProductProvider from './productsitems/ProductContext'

export default function ProductPage () {
  return (
    <div className='home-container'>
      <NavBar />
      <ProductProvider>
        <ProductList />
      </ProductProvider>
    </div>
  )

}