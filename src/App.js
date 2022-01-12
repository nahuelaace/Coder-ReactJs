import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import Menu from './component/Menu';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';
import ItemCount from './component/Counters/ItemCount';
import ItemDetailContainer from './component/ItenDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div>
     <Menu />
     <ItemListContainer greeting="Tienda de ropa AC"/>
     <ItemCount min={1} max={10} />
     <ItemDetailContainer />
    </div>
  );
}

export default App;
