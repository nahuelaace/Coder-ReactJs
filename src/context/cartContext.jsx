import { createContext, useContext, useState } from "react";

//creo el contexto
const CartContext = createContext([])


// funcion que me evita importar el useContext y CartContext en todos los archivos 
export function useCartContext(){
    return useContext(CartContext)
}

//cracion del componente que maneja el contexto
export const CartContextProvider = ({children}) => {

    //estados y funciones globales

    const[cartList, setCartList] = useState([]) 
 
    function agregarAlCarrito(items){

        const index = cartList.findIndex(i => i.id === items.id)

        console.log(index)

        if (index > -1) {

            const cantAnterior = cartList[index].cantidad

            cartList.splice(index, 1)

            setCartList([...cartList, {...items, cantidad: items.cantidad + cantAnterior}])
            
            console.log(cartList)
        } else {
            setCartList([...cartList, {...items, cantidad: items.cantidad}])
        }

        
    }

    function vaciarCarrito(){
        setCartList([])
    }

    function removerItem(item) {
        
        const itemFiltrado = cartList.filter(i => i.id !== item)
        
        setCartList(itemFiltrado)

        console.log(cartList)
        
    }

    function total() {
        const totalCarrito = cartList.reduce(
            (prev, curr) => prev + curr.precio * curr.cantidad,
            0
        )
        
        return totalCarrito
    }
    
    function totalItems() {
        const contItems = cartList.reduce(
            (prev, curr) => prev + curr.cantidad,
            0
        )

        return contItems
    }

    return(
        <CartContext.Provider value = {{
            cartList,
            agregarAlCarrito,
            vaciarCarrito,
            removerItem,
            total,
            totalItems
        }}>
            {children}
        </CartContext.Provider>
    )


}