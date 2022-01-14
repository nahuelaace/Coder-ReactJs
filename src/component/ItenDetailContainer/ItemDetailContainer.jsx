import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../../helpers/mock'
import ItemDetail from './ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    
    const [producto, setproducto] = useState([])

    const {idDetalle} = useParams()

    useEffect(() => {
        
        getFetch
        .then(resp => setproducto(resp.find(prod => prod.id === idDetalle)))
        
    }, [idDetalle])

    console.log(producto);

    return (
        <div>
            <ItemDetail producto={producto}/>
        </div>
    )
}

export default ItemDetailContainer
