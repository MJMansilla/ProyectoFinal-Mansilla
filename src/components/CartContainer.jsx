import {useCart} from "../context/useCart"
import { useNavigate } from "react-router"
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import EmptyCart from "./EmptyCart"

function CartContainer() {
    const {cart, getTotal, eliminarDelCarrito, vaciarCarrito} = useCart()
    const total = getTotal()
    const navigate = useNavigate()

    if (cart.length === 0) {
        return <EmptyCart />
    }

    return (
        <div className='borde-rojo'>
            <h1>Tu Carrito de Compras</h1>
            <ListGroup>
                {cart.map(item => (
                    <ListGroup.Item key={item.id}>
                        <div className='contenedor-fila d-flex justify-content-between align-items-center'>
                            <p>{item.count} unidad(es) de: {item.nombre} =${item.count*item.precio}</p>
                            <Button onClick={() => eliminarDelCarrito(item.id)}>⛔</Button>
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <h2>TOTAL: {total}</h2>
            <div className="d-flex gap-2 mb-2">
                <Button onClick={() => navigate(-1)}>⬅️ Volver</Button>
                
                <Button
                variant="success"
                onClick={() => navigate('/checkout')}
                >
                    Iniciar Orden de Compra
                </Button>

                <Button variant="danger" onClick={vaciarCarrito}>🗑️ Vaciar Carrito</Button>
            </div>
        </div>
    )
}

export default CartContainer