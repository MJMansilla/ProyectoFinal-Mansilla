import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { useCart } from "../context/useCart"
import { createOrder } from "../firebase/db"
import { serverTimestamp } from "firebase/firestore"
import { useNavigate } from "react-router"
import { ToastContainer, toast } from "react-toastify"



function Checkout () {
    const { cart, vaciarCarrito } = useCart()
    const navigate = useNavigate()
    const notify = () => toast("Compra realizada con éxito!");

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const nombre = form.nombre.value
        const telefono = form.telefono.value

        createOrder({
            email,
            nombre,
            telefono,
            productos: cart,
            time: serverTimestamp(),
        })
        notify()
        vaciarCarrito()
        navigate("/cart")
    }

    return (
        <div className = 'd-flex justify-content-center mt-5'>
            <Form className = 'w-50' onSubmit={handleSubmit} >
                <Form.Group className="mb-3" controlId= "email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type= "email" placeholder="Ingrese su email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId= "nombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type= "text" placeholder="Ingrese su nombre completo"required />
                </Form.Group>
                <Form.Group className="mb-3" controlId= "telefono">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control type= "text" placeholder="+5491155338811" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Finalizar Compra
                </Button>
            </Form>
        </div>
    )
}

export default Checkout