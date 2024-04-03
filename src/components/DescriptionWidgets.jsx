import React from 'react';
import './descriptionWidgets.css'
import {FaArrowDown, FaArrowUp} from "react-icons/fa";

const DescriptionWidgets = ({weather, units}) => {
    const speedUnit = units === 'metric' ? 'm/s' : 'm/h';
    const tempUnit = units === 'metric' ? '°C' : '°F';

    const cards = [
        {
            id: 1,
            icon: <FaArrowUp/>,
            title: 'max',
            data: weather.temp_max.toFixed(),
            unit: tempUnit,
        },
        {
            id: 2,
            icon: <FaArrowDown/>,
            title: 'min',
            data: weather.temp_min.toFixed(),
            unit: tempUnit,
        },
        {
            id: 3,
            icon: <FaArrowDown/>,
            title: 'pressure',
            data: weather.pressure.toFixed(),
            unit: 'hPa',
        },
        {
            id: 4,
            icon: <FaArrowDown/>,
            title: 'humidity',
            data: weather.humidity.toFixed(),
            unit: '%',
        },
        {
            id: 5,
            icon: <FaArrowDown/>,
            title: 'speed',
            data: weather.speed.toFixed(),
            unit: speedUnit,
        },
        {
            id: 6,
            icon: <FaArrowDown/>,
            title: 'feels like',
            data: weather.feels_like.toFixed(),
            unit: tempUnit,
        },
    ]

    return (
        <div className='section section_descriptionWidgets'>
            {cards.map(({id, title, data, unit, icon}) => (

                <div key={id} className='card'>

                    <div className='description_card_item'>
                        <h5>{title}{icon}</h5>

                    </div>

                    <h4>{`${data} ${unit}`}</h4>
                </div>

            ))}
        </div>
    );
};

export default DescriptionWidgets;
