const getFormattedWeatherData = async (city, units = 'metric') => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=${units}`;
    const getIconUrl = (iconId) => `https://openweathermap.org/img/wn/${iconId}.png`
    const data = await fetch(URL)
        .then(res => res.json())
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
