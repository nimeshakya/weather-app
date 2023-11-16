import React from 'react';

import ClearNight from '../Icons/113.png';

import './ForecastCard.scss';

const ForecastCard = () => {
    return (
        <div className='forecast-card'>
            <div className='forecast-card-header'>
                <h1>Current weather</h1>
                <p>Kathmandu, Nepal</p>
            </div>
            <p id='current-time'>12:00 PM</p>
            <div className='current-forecast'>
                <img src={ClearNight} alt='Clear Night' />
                <h2>23&deg;C</h2>
                <div className='current-forecast-more-info'>
                    <p>Sunny</p>
                    <p>Feels like 24.6&deg;</p>
                </div>
            </div>
            <p id='current-temp-details'>
                <span>High: 22.4&deg;</span>
                <span>Avg: 15.0&deg;</span>
                <span>Low: 10.1&deg;</span>
            </p>
        </div>
    );
};

export default ForecastCard;
