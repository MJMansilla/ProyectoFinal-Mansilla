import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';


export function CartWidget() {
  const {cantidadEnCarrito} = useContext(CartContext)
  const cantidad = cantidadEnCarrito()
  return (
  <Button variant="success">Carrito {cantidad} </Button>
  );
}