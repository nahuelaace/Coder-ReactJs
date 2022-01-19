import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ItemCount from '../../Counters/ItemCount';


const ItemDetail = ({producto}) => {

    const [show, setShow] = useState(true)

    const onAdd = (counter) => {
        setShow(false)
    }

    return (
        <div>
            <Card className='text-center mx-auto' key={producto.id} style={{ width:'18rem' }}>

            <Card.Body>

                <Card.Title>{producto.producto}</Card.Title>

                <Card.Img variant="top" src={`${producto.img}`} />
                
                <Card.Text>
                    
                    {
                        show ? <ItemCount min={1} max={10} onAdd={onAdd}/> :
                        <div>

                            <Link to='/'><button>Continuar compra</button></Link>
                            <Link to='/cart'><button>Ir a carrito</button></Link>

                        </div> 
                    }
                
                </Card.Text>
                

            </Card.Body>

            </Card>

        </div>
    )
}

export default ItemDetail
