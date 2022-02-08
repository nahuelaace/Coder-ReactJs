import React from 'react';
import { useCartContext } from '../../context/cartContext';

function ItemCart({prod}) {
  
    const { removerItem} = useCartContext()

    return (
        <div>
            <li key={prod.id}>{prod.producto} Cantidad:{prod.cantidad} $ {prod.precio}

            <button onClick={() => removerItem(prod.id)}>Remover Item</button> 

            </li>

        </div>
    )
    
}

export default ItemCart;
