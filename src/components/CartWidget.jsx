import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router';


export function CartWidget() {
  const navigate = useNavigate();
  const {cantidadEnCarrito} = useContext(CartContext)
  const cantidad = cantidadEnCarrito()
  return (
  <Button variant="success" onClick={()=> navigate("/cart")}>Carrito🗑️ {cantidad} </Button>
  );
}