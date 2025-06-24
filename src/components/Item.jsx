import { use } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router';

function Item ({prod}) {
  const navigate = useNavigate();
    return (
    <Card  style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {prod.thumbnail} />
      <Card.Body>
        <Card.Title>{prod.title}</Card.Title>
        <Card.Text> {prod.description}
        </Card.Text>
        <Button variant="primary" onClick={()=> navigate(`/item/${prod.id}`)}>Ver Mas</Button>
      </Card.Body>
    </Card>
    )
}
export default Item