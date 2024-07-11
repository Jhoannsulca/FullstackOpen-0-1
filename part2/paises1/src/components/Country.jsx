import React from 'react'
import CountryDetails from './CountryDetails';

const Country = ( {country, showDetails, handleShowDetails, handleHideDetails} ) => {

  return (
    <div>
      {country.name.common} {"  "}
      {!showDetails && <button className="btn btn-danger ml-2" onClick={handleShowDetails}>Ver detalles</button>}
      {showDetails && <CountryDetails country={country} onClose={handleHideDetails} />}
    </div>
  )
}

export default Country

















// import { useState, useEffect } from 'react'
// import countryService from './services/country'
// const Country = () => {
//      //1. Setear los hooks
//   const [countries, setCountries] = useState([]); //Todos los paises
//   const [newSearch, setNewSearch] = useState('') //Valor ingreasado
  
//   //2. Función para traer los datos
//   const [showUno, setShowUno] = useState(false)
//   const [selectedCountry, setSelectedCountry] = useState(null); //pais seleccionado
//   const [temp, setTemp] = useState(0)
//   const [clima, setClima] = useState([])
//   const [wind, setWind] = useState(0)
//   useEffect(() => {
//     countryService
//       .getAll()
//       .then(initialCountries => {
//         setCountries(initialCountries)
//       })
//   }, [])

//   //3. Función de busqueda
//   const handleQuery = (e) => {
//     setNewSearch(e.target.value)
//     setSelectedCountry(null)
//   }

//   //4. Filtrar los datos
//   const countrys = countries.filter(country =>
//     country.name.common.toLowerCase().includes(newSearch.toLowerCase())
//   );

//   // const results = !newSearch ? countries : countries.filter( (country) => 
//   //   country.name.common.toLowerCase().includes(newSearch.toLocaleLowerCase()))

  
//   const handleSelectCountry = (country) => {
//     setSelectedCountry(country);
//     setShowUno(true)
//   };

//   const renderCountryList = () => {
//     if (countrys.length > 10) {
//       return <p>Por favor, especifica más tu búsqueda.</p>;
//     }
//     else if (countrys.length === 1) {
//       return (
//         <div>
//           <h2>{countrys[0].name.common}</h2>
//           <p><b>Capital:</b> {countrys[0].capital[0]}</p>
//           <p><b>Área:</b> {countrys[0].area} km²</p>
//           <p><b>Idiomas:</b></p>
//           <ul>
//             {Object.entries(countrys[0].languages).map(([key, value]) => (
//               <li key={key}>
//                 {value}
//               </li>
//             ))}
//           </ul>
//           <img src={countrys[0].flags.png} alt={countrys[0].flags.alt} />
//         </div>
//       );
//     } 
//     else if (countrys.length > 1) {
//       return (
//         <ul className="list-group">
//           {countrys.map((country) =>
//           <Country
//             key={country.name.common} 
//             country={country}
//             onShow={handleSelectCountry}
//           />
//           )}
//         </ul>  
//       ) 
//     } else {
//       return <p>No results found.</p>; // Handle no search results case
//     } 
//   };

//   const renderCountryDetails = () => {
//     if(showUno || selectedCountry) {
//       const { name, capital, area, languages, flags  } = selectedCountry;
//       const capitalCity = capital[0]
//       countryService
//         .getClimaCapital(capitalCity)
//         .then(infoCapital => {
//           setTemp(infoCapital.main)
//           setClima(infoCapital.weather[0].icon)
//           setWind(infoCapital.wind.speed)
//         })
//       return (
//         <div>
//           <h2>{name.common}</h2>
//           <p><b>Capital:</b> {capitalCity}</p>
//           <p><b>Área:</b> {area} km²</p>
//           <p><b>Idiomas:</b></p>
//           <ul>
//             {Object.entries(languages).map(([key, value]) => (
//               <li key={key}>
//                 {value}
//               </li>
//             ))}
//           </ul>
//           <img src={flags.png} alt={flags.alt} />
//           <p><b>Temperatura en {capitalCity}:</b> {`temperature: ${parseInt(temp.temp-273)}`}°C</p>
//           <img src={`https://openweathermap.org/img/wn/${clima}.png`}></img>
//           <h4>Wind: {wind}m/s</h4>
//         </div>
//       );
//     }
//   }
//     return (
//         // <li className="list-group-item">
//         //   {country.name.common}
//         //   <button className="btn btn-primary" onClick={handleShow}>Show</button>
//         // </li>
//       <div className='container'>
//         <div>
//           <h1>Información de países</h1>
//           <input type="text" onChange={handleQuery} />
//           {newSearch.length > 0 && renderCountryList()}
//           {selectedCountry && renderCountryDetails()}
//         </div>
//       </div>
//     )
//   }
  
// export default Country