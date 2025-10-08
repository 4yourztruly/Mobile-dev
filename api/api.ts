const API_KEY = process.env.EXPO_PUBLIC_API_KEY;
const API_URL = process.env.EXPO_PUBLIC_API_URL;
const API_CITY_URL = process.env.EXPO_PUBLIC_API_CITY_URL;

export async function getWeather(city: string) {
    try{
    const CoorResponse = await fetch(`${API_CITY_URL}?q=${city}&appid=${API_KEY}&units=metric`);

    const coorData = await CoorResponse.json();

    if(!coorData.length) {
        return console.log('city not found'), "city not found";
    }

    const weatherResponse = await fetch(`${API_URL}?lat=${coorData[0].lat}&lon=${coorData[0].lon}&appid=${API_KEY}&units=metric`);

    const weatherData = await weatherResponse.json();

    const cityWeather = {
    tempC: weatherData.main.temp,
    tempF: weatherData.main.temp *9/5 +32,
    weatherType: weatherData.weather[0].main,
    description: weatherData.weather[0].description,
    };

    return cityWeather;
   } catch(error) {
    console.error('Error fetching weather',error);
    throw error;
   }
}