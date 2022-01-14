import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Item = ({prod}) => {
    
    return (
        <div>
            <Card className='text-center mx-auto' key={prod.id} style={{ width:'18rem' }}>

            <Card.Body>

                <Card.Title>{prod.producto}</Card.Title>

                <Card.Text>

                <Card.Img variant="top" src={`${prod.img}`} />
                
                </Card.Text>
                
                <Link to={`/detalle/${prod.id}`}>
                
                    <Button variant="dark">Comprar</Button>
                
                </Link>
                

            </Card.Body>

            </Card>

        </div>
    )
    
}

export default Item