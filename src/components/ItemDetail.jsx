import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Count from './ItemCount';

function ItemDetail({ detail }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Card style={{width: '18rem' }}>
            <Card.Img variant="top" src= {detail.imagen} />
            <Card.Body>
                <Card.Title> {detail.nombre} </Card.Title>
                <Card.Title> ${detail.precio} </Card.Title>
                <Card.Text>
                    {detail.descripcion}
                </Card.Text>
                <Count item={detail} />
            </Card.Body>
        </Card>
    </div>
  )
}

export default ItemDetail
