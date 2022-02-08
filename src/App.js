import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarr from './component/NavBarr';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './component/ItenDetailContainer/ItemDetailContainer';

import Cart from './component/Cart/Cart';
import { CartContextProvider } from './context/cartContext';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>

        <NavBarr />
        <Routes>
    
          <Route exact path='/' element={<ItemListContainer greeting="Tienda de ropa AC"/>} />
          <Route exact path='/Categoria/:idCategoria' element={<ItemListContainer greeting="Tienda de ropa AC"/>} />
          <Route exact path='/detalle/:idDetalle' element={<ItemDetailContainer />} />
          <Route exact path='/cart' element={<Cart />} />

        </Routes>
      
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
