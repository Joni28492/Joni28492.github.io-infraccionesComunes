
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Telefonos } from './components/Telefonos';
import { MainRoute } from './routes/MainRoute';

function App() {
  return (
    <div className="App">

      <h1>Actuaizaciones</h1>



      <Telefonos />
    </div>
  );
}

export default App;
