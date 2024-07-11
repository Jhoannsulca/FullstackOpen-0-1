import React from 'react'

const CountryDetails = ({ country, onClose }) => {
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
        <button className="btn btn-secondary ml-2" onClick={onClose}>Cerrar</button>
      </div>
    );
  };
  

export default CountryDetails
