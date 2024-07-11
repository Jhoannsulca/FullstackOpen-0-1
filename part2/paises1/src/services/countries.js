import axios from 'axios'

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api' //URL de paises
const baseUrlCoordenadasPais = 'http://api.openweathermap.org/geo/1.0/direct?' //URL de coordenadas de capitales
const baseUrlClima = 'https://api.openweathermap.org/data/2.5/weather'//URL de climas de coordenadas
const API_KEY = 'c76d52d9e605844d78bee16cadcbb5e5' //Llave

const getAll = () => {
    const request = axios.get(`${baseUrl}/all`)
    return request.then(response => response.data)
}

const getClimaCapital = async (capital) => {
    const request =  await axios.get(`${baseUrlCoordenadasPais}q=${capital}&limit=1&appid=${API_KEY}`);
    const lat = await request.data[0].lat
    const lon = await request.data[0].lon    
    const request1 = await axios.get(`${baseUrlClima}?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
    return request1.data

};

export default { getAll, getClimaCapital}