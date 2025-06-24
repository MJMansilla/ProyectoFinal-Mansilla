import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function Count({ initial = 1}) {
  const [count, setCount] = useState(initial);

  const increment = () => {setCount(count + 1);};

  const decrement = () => {
    if (count > 1) setCount(count - 1);};

  return (
    <div className="d-flex flex-column align-items-center mt-3">
      <ButtonGroup className="mb-2">
        <Button variant="outline-secondary" onClick={decrement}>-</Button>
        <Button variant="light" disabled>{count}</Button>
        <Button variant="outline-secondary" onClick={increment}>+</Button>
      </ButtonGroup>
      <Button variant="primary">
        Agregar al carrito
      </Button>
    </div>
  );
}

export default Count;