import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import NavBarr from './component/NavBarr';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';
import ItemCount from './component/Counters/ItemCount';
import ItemDetailContainer from './component/ItenDetailContainer/ItemDetailContainer';

import Cart from './component/Cart/Cart';

function App() {
  return (
    <BrowserRouter>

      <NavBarr />
      <Routes>
  
        <Route exact path='/' element={<ItemListContainer greeting="Tienda de ropa AC"/>} />
        <Route exact path='/Categoria/:idCategoria' element={<ItemListContainer greeting="Tienda de ropa AC"/>} />
        <Route exact path='/detalle/:idDetalle' element={<ItemDetailContainer />} />
        <Route exact path='/ItemCount' element={<ItemCount min={1} max={10} />} />
        <Route exact path='/cart' element={<Cart />} />

      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
