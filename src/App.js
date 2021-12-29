import logo from './logo.svg';
import './App.css';
import Menu from './component/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';
import ItemCount from './component/Counters/ItemCount';

function App() {
  return (
    <div>
     <Menu />
     <ItemListContainer greeting="Tienda de ropa AC"/>
     <ItemCount min={1} max={10} />
    </div>
  );
}

export default App;
