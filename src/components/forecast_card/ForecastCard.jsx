import React from 'react';

import { useGlobalContext } from '../../context/GlobalContext';

import Loading from '../Loading/Loading';
import ForecastInfo from './ForecastInfo';

import './ForecastCard.scss';

const ForecastCard = () => {
    const { forecastInfo, location, currentWeather, weatherForecast, loading } =
        useGlobalContext();

    if (loading) {
        return <Loading />;
    }
    return (
        <div className='forecast-card'>
            <div className='forecast-card-header'>
                <h1>Current weather</h1>
                <p>
                    {location.region === ''
                        ? `${location.name}, ${location.country}`
                        : `${location.name}, ${location.region}, ${location.country}`}
                </p>
            </div>
            <p id='current-time'>
                {location.localtime.slice(
                    location.localtime.indexOf(' '),
                    location.localtime.length
                )}
            </p>
            <div className='current-forecast'>
                <img src={currentWeather.condition.icon} alt='Clear Night' />
                <h2>{currentWeather.temp_c}&deg;C</h2>
                <div className='current-forecast-more-info'>
                    <p>{currentWeather.condition.text}</p>
                    <p>Feels like {currentWeather.feelslike_c}&deg;</p>
                </div>
            </div>
            <p id='current-temp-details'>
                <span>
                    High: {weatherForecast.forecastday[0].day.maxtemp_c}&deg;
                </span>
                <span>
                    Avg: {weatherForecast.forecastday[0].day.avgtemp_c}&deg;
                </span>
                <span>
                    Low: {weatherForecast.forecastday[0].day.mintemp_c}&deg;
                </span>
            </p>

            <div className='current-forecast-info'>
                {forecastInfo.map((info, index) => {
                    return <ForecastInfo key={index} info={info} />;
                })}
            </div>
        </div>
    );
};

export default ForecastCard;
