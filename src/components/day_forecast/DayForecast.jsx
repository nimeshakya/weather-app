import React, { useEffect, useRef } from 'react';
import { FaDroplet } from 'react-icons/fa6';
import './DayForecast.scss';

const DayForecast = ({ forecast, index, activeForecastIndex }) => {
    const monthArray = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];

    const hyphenIndex1 = forecast.date.indexOf('-');
    const hyphenIndex2 = forecast.date.indexOf('-', hyphenIndex1 + 1);
    const month =
        parseInt(forecast.date.slice(hyphenIndex1 + 1, hyphenIndex2)) - 1; // -1 because first in month array is index 0 and first month is 1
    const day = forecast.date.slice(hyphenIndex2 + 1, forecast.date.length);

    return (
        <>
            <p className='day-forecast-date'>
                {index === 0 ? 'Today' : `${monthArray[month]} ${day}`}
            </p>
            <div className='day-forecast-info'>
                <div className='forecast-temp-info'>
                    <img
                        src={forecast.day.condition.icon}
                        alt={forecast.day.condition.text}
                    />
                    <p>
                        <span className='forecast-max-temp'>
                            {forecast.day.maxtemp_c}&deg;
                        </span>
                        <span className='forecast-min-temp'>
                            {forecast.day.mintemp_c}&deg;
                        </span>
                    </p>
                </div>
                <div
                    className={`forecast-weather-info ${
                        index === activeForecastIndex
                            ? 'forecast-weather-info-active'
                            : ''
                    }`}
                >
                    <p>{forecast.day.condition.text}</p>
                    <p>
                        <span>
                            <FaDroplet />
                        </span>
                        {forecast.day.totalprecip_mm}mm
                    </p>
                </div>
            </div>
        </>
    );
};

export default DayForecast;
