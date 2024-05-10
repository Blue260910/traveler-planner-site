import React from "react";
import "../RespondeGrid.css";


const RespondeGrid = ({ data }) => (
    <div className="grid-container">
      <table className="grid-table">
        <thead>
          <tr>
            <th>Informações</th>
            <th>Passeios</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((city, index) => (
            <tr key={index}>
              <td>
                <h3 className="city-name">{city.nome_da_cidade}</h3>
                <h4 className="section-title">Hotéis:</h4>
                <ul className="list">
                  {city.acomodações.map((hotel, i) => (
                    <li key={i}>{hotel}</li>
                  ))}
                </ul>
                <h4 className="section-title">Restaurantes:</h4>
                <ul className="list">
                  {city.restaurantes.map((restaurant, i) => (
                    <li key={i}>{restaurant}</li>
                  ))}
                </ul>
              </td>
              <td>
                <ul className="list">
                  {city.passeios_e_atividades.map((activity, i) => (
                    <li key={i}>
                      Dia {activity.dia}: {activity.passeio}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
export default RespondeGrid;

