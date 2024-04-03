const API_KEY = 'c59b49aa99bf03ce47f5eaaf1bfd7393';

const getFormattedWeatherData = async (city, units = 'metric') => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;
    const getIconUrl = (iconId) => `https://openweathermap.org/img/wn/${iconId}.png`
    const data = await fetch(URL)
        .then(res => res.json())
        // .then(data => data)
    // console.log(data)
    const {
        wind: {speed},
        main: {temp, temp_max, temp_min, pressure, humidity, feels_like},
        name,
        sys: {country},
        weather,
    } = data;
    const {description, icon} = weather[0]
    return {
        description,
        iconUrl: getIconUrl(icon),
        country,
        name,
        temp,
        temp_max,
        temp_min,
        pressure,
        humidity,
        feels_like,
        speed,
    }
}

export {getFormattedWeatherData}
