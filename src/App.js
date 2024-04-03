import './App.css';
import React, {useEffect, useState} from "react";
import beach from '../src/pictures/beach.jpg'
import DescriptionWidgets from "./components/DescriptionWidgets";
import {getFormattedWeatherData} from "./weatherService";

function App() {

    const [city, setCity] = useState('Atlanta');
    const [weather, setWeather] = useState(null)
    const [units, setUnits] = useState('metric')
    useEffect(() => {
        const fetchWeatherData = async () => {
            const data = await getFormattedWeatherData(city, units);
            setWeather(data);
            // console.log(data)
        }
        fetchWeatherData();
    }, [units, city]);
    const enterKeyPressed = (e) => {
        if (e.keyCode === 13) {
            setCity(e.currentTarget.value)
        }
    }
    const handleUnitClick = (e) => {
        const button = e.currentTarget;
        const currentUnit = button.innerText.slice(1)
        const isCelsius = currentUnit === 'C'
        button.innerText = isCelsius ? '°F' : '°C';
        setUnits(isCelsius ? 'metric' : 'imperial')
    }

    return (
        <div className="App" style={{backgroundImage: `url(${beach})`}}>
            <div className='overlay'>

                {weather && (
                    <div className='container'>

                        <div className='section section_input'>
                            <input
                                type="text"
                                placeholder='Enter your city...'
                                onKeyDown={enterKeyPressed}
                            />
                            <button onClick={(e) => handleUnitClick(e)}>°F
                            </button>

                        </div>

                        <div className='section section_temp'>
                            <div className='icon'>
                                <h3>{`${weather.name}, ${weather.country}`}</h3>
                                <img src={weather.iconUrl} alt="weatherIcon"/>
                                <h3>{weather.description}</h3>
                            </div>

                            <div className='temp'>
                                <h1>{`${weather.temp.toFixed()} °${
                                    units === 'metric' ? 'C' : 'F'
                                }`}</h1>
                            </div>

                        </div>
                        <DescriptionWidgets
                            weather={weather}
                            units={units}
                        />

                    </div>
                )}

            </div>
        </div>
    );
}

export default App;
