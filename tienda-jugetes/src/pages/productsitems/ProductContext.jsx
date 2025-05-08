import { createContext, useContext, useReducer } from "react"

const ProductsContext = createContext(null)
const ProductDispatchContext = createContext(null)

export default function ProductProvider ({ children }) {
    const [cartList, dispatch] = useReducer(cartReducer, [])

    return (
      <ProductsContext.Provider value={cartList}>
        <ProductDispatchContext.Provider value={dispatch}>
          {children}
        </ProductDispatchContext.Provider>
      </ProductsContext.Provider>
        
    )
}

export function useProducts() {
  return useContext(ProductsContext)
}

export function useProductDispatch() {
  return useContext(ProductDispatchContext)
}

function cartReducer(cartList, action) {
    console.log(action)
  switch (action.type) {
    case "add_to_cart":
      return [...cartList, action.payload]
    case "remove_from_cart":
      return cartList.filter((item) => item.id !== action.payload)
    default:
      return cartList
  }
}