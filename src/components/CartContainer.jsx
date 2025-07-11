import {useCart} from "../context/useCart"
import { useNavigate } from "react-router"
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

function CartContainer() {
    const {cart, getTotal} = useCart()
    const total = getTotal()
    const navigate = useNavigate()

    return (
        <div className="container">
            <h2>Carrito de compras</h2>
            <ListGroup>
                {cart.map(item => (
                    <ListGroup.Item key={item.id}>
                        <div className="d-flex justify-content-between align-items-center">
                            <span>{item.nombre} - ${item.precio} x {item.count}</span>
                            <span>${item.precio * item.count}</span>
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <h3>Total: ${total}</h3>
            <Button variant="primary" onClick={() => navigate("/checkout")}>Finalizar compra</Button>
        </div>
    )
}

export default CartContainer