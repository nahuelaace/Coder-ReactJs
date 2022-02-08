import React from 'react'
import { BsFillCartCheckFill } from 'react-icons/bs';
import { useCartContext } from '../../context/cartContext';


const CartWidget = () => {

    const {totalItems} = useCartContext()

    return (
        <div>
            <BsFillCartCheckFill/> {totalItems()}
        </div>
    )
}

export default CartWidget