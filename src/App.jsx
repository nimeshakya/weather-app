import React, { useEffect, useState, useRef } from 'react';

// import axios from 'axios';

import { useGlobalContext } from './context/GlobalContext';
import Cities from './components/cities/Cities';
import ForecastCard from './components/forecast_card/ForecastCard';
import DayForecast from './components/day_forecast/DayForecast';

const App = () => {
    const dayForecastRef = useRef(new Array());
    const { weatherForecast, loading } = useGlobalContext();
    // one which has more information and selected
    const [activeForecastIndex, setActiveForecastIndex] = useState(0);

    const handleDayForecastClick = (e, index) => {
        dayForecastRef.current.forEach((item, index) => {
            if (item !== null) {
                item.classList.remove('day-forecast-active');
            }
        });
        e.currentTarget.classList.add('day-forecast-active');
        setActiveForecastIndex(index);
    };

    return (
        <>
            <div className='app-container'>
                <div className='app-components-container'>
                    <Cities />
                    <ForecastCard />
                    <p className='forecast-description'>3 Day Forecast</p>
                    <div className='forecasts-container'>
                        {!loading &&
                            weatherForecast.forecastday.map(
                                (dayForecast, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className={`day-forecast ${
                                                index == 0
                                                    ? 'day-forecast-active'
                                                    : ''
                                            }`}
                                            ref={(element) =>
                                                dayForecastRef.current.push(
                                                    element
                                                )
                                            }
                                            onClick={(event) =>
                                                handleDayForecastClick(
                                                    event,
                                                    index
                                                )
                                            }
                                        >
                                            <DayForecast
                                                forecast={dayForecast}
                                                index={index}
                                                activeForecastIndex={
                                                    activeForecastIndex
                                                }
                                            />{' '}
                                        </div>
                                    );
                                }
                            )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
