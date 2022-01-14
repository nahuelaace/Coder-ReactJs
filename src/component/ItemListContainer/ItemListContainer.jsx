import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {getFetch } from '../../helpers/mock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({greeting}) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState (true)

    const {idCategoria} = useParams()

    useEffect(() => {
        //simulacro api

        if (idCategoria) {
            getFetch
            .then(resp => setProductos(resp.filter(prod => prod.categoria === idCategoria)))
            .catch(err => console.log(err))
            .finally(() => setLoading(false) ) 
        } else {
            getFetch
            .then(resp => setProductos(resp))
            .catch(err => console.log(err))
            .finally(() => setLoading(false) ) 
        }
        
    }, [idCategoria])


    console.log(idCategoria);

    return (
        <div>
            <h1 className='text-center'>{greeting}</h1>

            {
                loading ? <h3> Cargando...</h3> : 
                <ItemList productos = {productos} />

            }

        </div>
    )
}

export default ItemListContainer