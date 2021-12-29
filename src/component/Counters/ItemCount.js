import React, { useState } from 'react'


const ItemCount = ({min, max, onAdd}) => {

    const [counter, setCounter] = useState(min)
    const [show, setShow] = useState(false)

    const suma = () => {

        counter < max ? setCounter(counter+1) : alert("El maximo de compra es 10")

    }

    const resta = () => {

        counter > min ? setCounter(counter-1) : alert("El minimo de compra es 1") 

    }

    const mostrar = () => {
        setShow(!show)
    }


    return (

        <div className='text-center'>

            <h1>{counter}</h1>

            <button onClick={suma}>+</button>

            <button onClick={resta}>-</button>
            <br/> <br/>
            <button onClick={mostrar}>Agregar al carrito</button>

            {
                show && <h1>{counter}</h1>
            }

        </div>
    )
}



export default ItemCount