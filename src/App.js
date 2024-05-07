import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import CidadeCard from './Components/CidadeCard';
import AddCidades from './Components/AddCidades';


function App() {

  const cidadeNomes = ["Nome da Cidade 1", "Nome da Cidade 2", "Nome da Cidade 3"];
  const cidadeDetalhes = ["Detalhes da Cidade 1", "Detalhes da Cidade 2", "Detalhes da Cidade 3"];
  const cidadeDias = ["5", "10", "15"];

  return (
    <div className="App">
      <div style={{display:"flex", flexDirection:"column",alignItems:"center",width:"max-content"}}>
      {cidadeNomes.length > 0 && cidadeDetalhes.length > 0 && cidadeDias.length > 0 && cidadeNomes.map((cidadeNome, index) => (
        <CidadeCard 
        key={index}
        cidadeNome={cidadeNome} 
        cidadeDetalhes={cidadeDetalhes[index]} 
        cidadeDias={cidadeDias[index]} 
        />        
      ))}
      {cidadeNomes.length > 0 && <AddCidades />}
      </div>
    </div> 
  );
}

export default App;
