import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { useCartContext } from '../../context/cartContext'
import ItemCart from './ItemCart'

const Cart = () => {
    const { cartList, vaciarCarrito, total} = useCartContext()

    const [carritoVacio, setCarritoVacio] =useState(true)

 
        if (cartList === []) {
            setCarritoVacio(true)
        } else {
            setCarritoVacio(false)
        }

    

    return (
        <div>

            {
                cartList.length < 1 
                ? 
                <div>El carrito esta vacio</div>  
                   
            :  
                    
                <div>
                    {cartList.map(prod => <ItemCart prod = {prod}/>)}                      
                    <p>El carrito no esta vacio</p>

                    <h3>TOTAL: {total()}</h3>
                    <button onClick={vaciarCarrito}>Vaciar Carrito</button>
                </div>
                
            }
                
            
        </div>
        
    )
}

export default Cart
