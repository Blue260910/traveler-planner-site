import React, { useState } from "react";
import styled from "styled-components";
import CidadeCard from "./CidadeCard";
import AddCidades from "./AddCidades";
import CidadesSearch from "./CidadesSearch";
import RespondeGrid from "./RespondeGrid";
import { CircularProgress } from '@material-ui/core'; // Importa o componente de carregamento


function CidadeMenuLista() {

  const [isLoading, setIsLoading] = useState(false); // Adiciona um estado para o carregamento

  const [apiData, setApiData] = useState(null); // Adiciona um estado para os dados da API

  const [cidadeNomes, setCidadeNomes] = useState([
    "Paris",
  ]);
  const [cidadeDetalhes, setCidadeDetalhes] = useState([
    "Detalhes da Cidade 1",
  ]);
  const [cidadeDias, setCidadeDias] = useState(["5"]);

  const addCity = (city, cityDetails) => {
    setCidadeNomes(prevCidadeNomes => [...prevCidadeNomes, city]);
    setCidadeDetalhes(prevCidadeDetalhes => [...prevCidadeDetalhes, cityDetails]);
    setCidadeDias(prevCidadeDias => [...prevCidadeDias, "1"]); // Add 1 day as standard
  };

  const changeDays = (city, days) => {
    const index = cidadeNomes.indexOf(city);
    if (index !== -1) {
      const newCidadeDias = [...cidadeDias];
      newCidadeDias[index] = days;
      setCidadeDias(newCidadeDias);
    }
  };

  const AddCidadesHandler = async () => {
    setIsLoading(true);
    const newCityData = {
        "Local_Partida": "São Paulo",
        "Cidades_Visita": [...cidadeNomes],
        "Duração_Dias": [...cidadeDias]
    };
    
    const LocalPartida = newCityData.Local_Partida;
    const CidadesVisita = newCityData.Cidades_Visita.join(', ');
    const DuracaoDias = newCityData.Duração_Dias.join(', ');

    console.log(newCityData); // This will log the newCityData object to the console

    // If you want to do something with newCityData, you can do it here

    const response = await fetch(`http://127.0.0.1:5000?LocalDePartida=${LocalPartida}&CidadesVisita=${CidadesVisita}&DuracaoDias=${DuracaoDias}`);
    let data;
    try {
        data = await response.json();
        setApiData(data); // Armazena os dados da API no estado
    } catch (e) {
        console.error('The response is not valid JSON:', e);
    }

    console.log(data); // This will log the data from the API to the console
    setIsLoading(false);
    };

  return (
    <div className="App">
      {isLoading ? <CircularProgress /> : ( // Renderiza o ícone de carregamento se isLoading for true
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "90vw",
            margin: "auto",
            padding: "30px 0",
          }}
        >
        <CidadesSearch onAddCity={addCity} />
        {cidadeNomes.length > 0 &&
          cidadeDetalhes.length > 0 &&
          cidadeDias.length > 0 &&
          cidadeNomes.map((cidadeNome, index) => (
            <CidadeCard
              key={index}
              cidadeNome={cidadeNome}
              cidadeDetalhes={cidadeDetalhes[index]}
              cidadeDias={cidadeDias[index]}
              onDaysChange={changeDays}
            />
          ))}
        {cidadeNomes.length > 0 && (
          <button
            style={{
              border: "none",
              background: "none",
              outline: "none",
              padding: "0",
            }}
            onClick={AddCidadesHandler}
          >
            <AddCidades />
          </button>
        )}
      </div>
      )}
      {apiData && <RespondeGrid data={apiData} />}
    </div>
  );
}

export default CidadeMenuLista;
