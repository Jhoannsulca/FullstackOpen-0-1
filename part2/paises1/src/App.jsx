import React from 'react'
import { useEffect, useState } from 'react'
import countryService from './services/countries'
import Country from './components/Country';
import CountryDetails from './components/CountryDetails';

const App = () => {
  const [countries, setCountries] = useState([]); //Todos los paises
  const [newSearch, setNewSearch] = useState('') //Valor ingreasado
  const [searchResults, setSearchResults] = useState([]); // Array to store filtered results
  const [showDetails, setShowDetails] = useState(false);
  // const [selectedCountry, setSelectedCountry] = useState(null);


  // const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    countryService
      .getAll()
      .then(initialCountries => {
        setCountries(initialCountries)
      })
  }, [countries])
  
  const filteredCountries = countries.filter(country =>  //4. Filtrar los datos en un nuevo Array "filteredCountries"
    country.name.common.toLowerCase().includes(newSearch.toLowerCase())
  );

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm)
    );
    setNewSearch(filteredCountries);
  };
  const handleQuery = (e) => {                            //3. Función de busqueda
    setNewSearch(e.target.value)
  }

  const handleShowDetails = () => {
    setShowDetails(true);
  };

  const handleHideDetails = () => {
    setShowDetails(false);
  };


  const renderCountryDetail = (country) => {
      return (
        <CountryDetails country={filteredCountries[0]} onClose={handleHideDetails}/>
      )
  }

  const renderCountryList = () => {
    if (filteredCountries.length > 10) {
      return <p>Too many matches, specify another filter</p>;
    }
    else if (filteredCountries.length === 1) {
      // setShowDetails(true)
      return (
        renderCountryDetail(filteredCountries[0])
      );
    } 
    else if (filteredCountries.length > 1) {
      return (
        <ul className="list-group">
          {filteredCountries.map((country) =>
            <Country country={country} showDetails={showDetails} handleShowDetails={handleShowDetails} handleHideDetails={handleHideDetails}/>
          )}
        </ul>  
      ) 
    } else {
      return <p>No results found.</p>; // Handle no search results case
    } 
  };

  return (
    <div className={'container'}>
      <h1>SEARCH COUNTRIES</h1>
      <div className='container'>
            <input type="text" placeholder='Buscar pais...' onChange={handleQuery}/>
        </div>
      <div>
        {newSearch.length > 0 && renderCountryList()}
        {/* {showUno && renderCountryDetail} */}
      </div>
    </div>
  )
}

export default App
