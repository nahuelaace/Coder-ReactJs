const productos = 
    [
        { id: '1',producto: 'Abgrigo Grande Hombre', categoria:'hombre', img:'https://res.cloudinary.com/dw476uwfo/image/upload/v1642124466/abrigos/1-abgrigo-grande-hombre_wbyhqz.jpg'},
        { id: '2',producto: 'Abrigo Celeste', categoria:'mujer', img:'https://res.cloudinary.com/dw476uwfo/image/upload/v1642124446/abrigos/2-abrigo-celeste_ya7x81.jpg'},
        { id: '3',producto: 'Abrigo Grande Amarillo', categoria:'hombre', img:'https://res.cloudinary.com/dw476uwfo/image/upload/v1642124446/abrigos/3-abrigo-grande-amarillo_yyknwe.jpg'},
        { id: '4',producto: 'Abrigo Grande Negro Mujer', categoria:'mujer', img:'https://res.cloudinary.com/dw476uwfo/image/upload/v1642124446/abrigos/4-abrigo-grande-negro-mujer_lfmhex.jpg'},
        { id: '5',producto: 'Abrigo Marron Claro', categoria:'mujer', img:'https://res.cloudinary.com/dw476uwfo/image/upload/v1642124673/abrigos/5-abrigo-marron-claro_t5vqea.jpg'},
        { id: '6',producto: 'Abrigo Negro', categoria:'mujer', img:'https://res.cloudinary.com/dw476uwfo/image/upload/v1642124446/abrigos/6-abrigo-negro-1_dbklf7.jpg'},
        { id: '7',producto: 'Abrigo Negro Mujer', categoria:'mujer', img:'https://res.cloudinary.com/dw476uwfo/image/upload/v1642124446/abrigos/7-abrigo-negro-mujer_a37jho.jpg'},
        { id: '8',producto: 'Abrigo cuadrille clasico', categoria:'mujer', img:'https://res.cloudinary.com/dw476uwfo/image/upload/v1642124446/abrigos/8-agrigo-cuadros_vtglaq.png'},
        { id: '9',producto: 'Campera de jean', categoria:'mujer', img:'https://res.cloudinary.com/dw476uwfo/image/upload/v1642124447/abrigos/9-campera-de-jean_pbrtdt.png'},
        { id: '10',producto: 'Abrigo cuadrille hombre', categoria:'hombre', img:'https://res.cloudinary.com/dw476uwfo/image/upload/v1642124447/abrigos/10-abrigo-cuadrille-hombre_xahogn.png'},
        { id: '11',producto: 'Saco Elegante Crema', categoria:'mujer', img:'https://res.cloudinary.com/dw476uwfo/image/upload/v1642124446/abrigos/11-saco-elegante-crema_ejdg6r.jpg'},
        { id: '12',producto: 'Saco Grande Crema', categoria:'mujer', img:'https://res.cloudinary.com/dw476uwfo/image/upload/v1642124447/abrigos/12-saco-grande-crema_xhwbt3.png'},
        { id: '13',producto: 'Abrigo azul con estrellas', categoria:'mujer', img:'https://res.cloudinary.com/dw476uwfo/image/upload/v1642124447/abrigos/13-abrigo_efpfs7.png'}, 
        { id: '14',producto: 'Saco Grande Mostaza', categoria:'mujer', img:'https://res.cloudinary.com/dw476uwfo/image/upload/v1642124447/abrigos/14-saco-grande-mostaza_qqkrqe.jpg'},
        { id: '15',producto: 'Saco rosa mujer', categoria:'mujer', img:'https://res.cloudinary.com/dw476uwfo/image/upload/v1642124447/abrigos/15-abrigo-rosa-mujer_e9kuon.jpg'}
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