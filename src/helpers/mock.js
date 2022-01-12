const productos = 
    [
        { id: '1',producto: "Abgrigo Grande Hombre"},
        { id: '2',producto: "Abrigo Celeste"},
        { id: '3',producto: "Abrigo Grande Amarillo"},
        { id: '4',producto: "Abrigo Grande Negro Mujer"},
        { id: '5',producto: "Abrigo Marron Claro"},
        { id: '6',producto: "Abrigo Negro"},
        { id: '7',producto: "Abrigo Negro Mujer"},
        { id: '8',producto: "Abrigo cuadrille clasico"},
        { id: '9',producto: "Campera de jean"},
        { id: '10',producto: "Abrigo cuadrille hombre"},
        { id: '11',producto: "Saco Elegante Crema"},
        { id: '12',producto: "Saco Grande Crema"},
        { id: '13',producto: "Abrigo azul con estrellas"}, 
        { id: '14',producto: "Saco Grande Mostaza"},
        { id: '15',producto: "Saco rosa mujer"}
    ];


export const getFetch = new Promise((resolve, reject) =>{
    // acciones
    let condicion = true
    if (condicion) {
            setTimeout(()=>{
            resolve(productos)
        }, 3000) 
        
    } else {
        reject('error')
    }
})