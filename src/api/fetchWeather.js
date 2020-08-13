import axios from 'axios'

const URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = '8591f0a95dedca7ab8f33081dc77f24c'

export const fetchWeather = async (query) => {
    const response = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY
        }
    })
    return response.data
}