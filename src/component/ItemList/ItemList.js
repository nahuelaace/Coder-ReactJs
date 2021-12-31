import React from 'react'
import Item from '../Item/Item'

const ItemList = ({productos}) => {
    return (
        <div>
            {productos.map(prod =>
            <Item prod = {prod} />)}
        </div>
    )
}

export default ItemList