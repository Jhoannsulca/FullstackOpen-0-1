import React from 'react'
import { useEffect, useState } from 'react'
import countryService from './services/countries'
import CountrySingle from './components/CountryDetailsSingle';
import CountryDetails from './components/CountryDetails';


const App = () => {
  const [countries, setCountries] = useState([]); //Todos los paises
  const [searchResults, setSearchResults] = useState([]); // Array to store filtered results
  const [selectedCountry, setSelectedCountry] = useState(null);

  //Efecto para obtener los paises
  useEffect(() => {
    countryService
      .getAll()
      .then(initialCountries => {
        setCountries(initialCountries)
      })
  }, [countries])


  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm)
    );
    setSearchResults(filteredCountries);
  };

  const handleShowDetails = (country) => {
    setSelectedCountry(country);
  };
  

  return (
    <div className={'container'}>
      <h1>LIST OF COUNTRIES</h1>
      <div className='container'>
            <input type="text" placeholder='Buscar pais...' onChange={handleSearch}/>
        </div>

      {/* Renderizado condicional basado en los resultados de la busqueda */}
      {searchResults.length === 1 ? (
        // Mostrar resultado directamente cuando hay un solo resultado
        <div className="country-details">
          <CountrySingle country={searchResults[0]}/>
        </div>
      ) : (
        // Show search results or country list if applicable
        searchResults.length > 0 && searchResults.length < 10 ? (
          <ul>
            {searchResults.map((country, i) => (
              <li key={i}>
                <span>{country.name.common}</span>
                <button className="btn btn-secondary ml-2" onClick={() => handleShowDetails(country)}>Detalle</button>
              </li>
            ))}
          </ul>
        ) : (
          searchResults.length > 0 ? (
            <p>Especifíca la busqueda</p>

          ): (
            <p>Insertar busqueda</p>
          )
        )
      )}

      {/* Country details modal (if selectedCountry is set) */}
      {selectedCountry && <CountryDetails country={selectedCountry} unDetail={setSelectedCountry}/>}

    </div>
  )
}

export default App
