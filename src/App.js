import logo from './logo.svg';
import './App.css';
import Menu from './component/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
     <Menu />
     <ItemListContainer greeting="Tienda de ropa AC"/>
    </div>
  );
}

export default App;
