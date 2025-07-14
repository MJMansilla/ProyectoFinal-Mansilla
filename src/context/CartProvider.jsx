import { useState } from "react"
import { CartContext } from "./CartContext"

export default function CartProvider({children}) {
  const [cart, setCart] = useState([])
  
  const agregarAlCarrito = (item) => {
    const estaEnCarrito = cart.some(prod => prod.id === item.id)
    if (estaEnCarrito) {
      const productoRepetido = cart.find(prod => prod.id === item.id)
      const cartSinRepetidos = cart.filter(prod => prod.id !== item.id)
      setCart([...cartSinRepetidos, {...productoRepetido, count: productoRepetido.count + item.count}])
    } else{
      setCart([...cart, item])
    }
  }
  const eliminarDelCarrito = (id) => {
    const cartSinEliminado = cart.filter(item => item.id !== id)
    setCart(cartSinEliminado)
  }


  const vaciarCarrito = () => setCart([])

  const cantidadEnCarrito = () => {
    const cantidad = cart.map (prod => prod.count).reduce((a, b) => a + b, 0)
    return cantidad
  }

  const getTotal = () => {
    const totales = cart.map(prod => prod.count * prod.precio)
    const total = totales.reduce((a, b) => a + b, 0)
    return total
  }

  return (
    <CartContext.Provider
      value={{cart, agregarAlCarrito, cantidadEnCarrito, eliminarDelCarrito, getTotal, vaciarCarrito}}>
        {children}
    </CartContext.Provider>
  )
}