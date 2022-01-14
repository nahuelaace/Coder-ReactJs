import React from 'react'
import Card from 'react-bootstrap/Card';
import ItemCount from '../../Counters/ItemCount';

const ItemDetail = ({producto}) => {
    return (
        <div>
            <Card className='text-center mx-auto' key={producto.id} style={{ width:'18rem' }}>

            <Card.Body>

                <Card.Title>{producto.producto}</Card.Title>

                <Card.Img variant="top" src={`${producto.img}`} />
                
                <Card.Text>
                    
                    <ItemCount min={1} max={10} />
                
                </Card.Text>
                

            </Card.Body>

            </Card>

        </div>
    )
}

export default ItemDetail
