import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import CidadeMenuLista from './Components/CidadesMenuLista';
import Home from './Components/Home';


function App() {

  return (
    <div className="App">
      <Home />
      <CidadeMenuLista />
    </div> 
  );
}

export default App;
