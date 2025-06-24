import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Count from './ItemCount';

function ItemDetail({ detail }) {
  return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src= {detail.thumbnail} />
            <Card.Body>
                <Card.Title> {detail.title} </Card.Title>
                <Card.Title> ${detail.price} </Card.Title>
                <Card.Text>
                    {detail.description}
                </Card.Text>
                <Button variant="primary">Agregar al Carrito</Button>
                <Count />
            </Card.Body>
        </Card>
  )
}

export default ItemDetail
