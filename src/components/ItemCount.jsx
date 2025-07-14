import { useState,} from 'react'
import { useCart } from '../context/useCart'
import { ToastContainer, toast } from "react-toastify"
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

function Count({ initial = 1, item}) {
  const [count, setCount] = useState(initial)
  const { agregarAlCarrito } = useCart()
  const notify = () => toast(`${count} unidades de ${item.nombre} se agregaron al carrito!`);

  const increment = () => {setCount(count + 1)}

  const decrement = () => {
    if (count > 1) setCount(count - 1)}
  
  const addToCart = () =>{
    agregarAlCarrito({...item, count})
    notify()} 

  return (
    <div className="d-flex flex-column align-items-center mt-3">
      <ButtonGroup className="mb-2">
        <Button variant="outline-secondary" onClick={decrement}>-</Button>
        <Button variant="light" disabled>{count}</Button>
        <Button variant="outline-secondary" onClick={increment}>+</Button>
      </ButtonGroup>
      <Button variant="primary" onClick={addToCart}>Agregar al carrito</Button>
    </div>
  )
}

export default Count