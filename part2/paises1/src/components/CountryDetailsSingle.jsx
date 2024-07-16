import React from 'react'
import { useEffect, useState } from 'react'
import climaService from '../services/countries'
import WeatherApp from './WeatherApp';

const CountryDetailsSingle = ({ country }) => {

  const [clima, setClima] = useState([]); //Clima de la capital

    return (
      <div>
        <h2>Detalles de {country.name.common}</h2>
        <p><b>Capital:</b> {country.capital}</p>
        <p><b>Área:</b> {country.area} km²</p>
        <p><b>Idiomas:</b></p>
        <ul>
            {Object.entries(country.languages).map(([key, value]) => (
            <li key={key}>
                {value}
            </li>
            ))}
        </ul>
        <img src={country.flags.png} alt={country.flags.alt} />
        <WeatherApp country={country}/>

      </div>
    );
  };
  

export default CountryDetailsSingle
