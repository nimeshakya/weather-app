import React, { useState, createContext, useContext, useEffect } from 'react';
import axios from 'axios';

const GlobalContext = createContext();

/* 
this is a forecast api so you have to give further queries parameters for;
    location "&q=lat,lng" or "&q=City"
    days "&days=number" number is [1, 5]
    air quality "&aqi=value" value is yes or no
    alerts "&alerts=value" value is yes or no
*/
const baseUrl =
    'https://api.weatherapi.com/v1/forecast.json?key=5ab94554223c4f7eb12152758232410';

const GlobalProvider = ({ children }) => {
    // we could use reducer here to use all states in an object
    // gonna skip that for this project

    const [loading, setLoading] = useState(true);
    const [currentWeather, setCurrentWeather] = useState({});
    const [weatherForecast, setWeatherForecast] = useState({});
    const [location, setLocation] = useState({});

    const [city, setCity] = useState('bhaktapur');

    // makes call for latide and longitude coordinates
    const makeCoordGeoPositionCall = async (lat, lng) => {
        if (!(lat === undefined || lng === undefined)) {
            const url = `${baseUrl}&q=${lat},${lng}&days=1&aqi=no&alerts=no`;
            try {
                const response = await axios(url);
                const data = await response.data;
                if (data) {
                    console.log(data);
                    setCurrentWeather(data.current);
                    setWeatherForecast(data.forecast);
                    setLocation(data.location);
                }
                setLoading(false);
            } catch (error) {
                console.log(error.response);
                setLoading(false);
            }
        }
    };

    const [forecastInfo, setForecastInfo] = useState([
        {
            name: 'wind',
            value: 7,
            unit: 'km/h',
            moreInfo: {
                value: 45,
                unit: 'deg',
            },
        },
        {
            name: 'humidity',
            value: 61,
            unit: '%',
        },
        {
            name: 'visibility',
            value: 8,
            unit: 'km',
        },
        {
            name: 'uv index',
            value: 0,
            unit: '',
        },
        {
            name: 'pressure',
            value: 1023,
            unit: 'mb',
        },
    ]);

    const fetchCurrentLocation = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://ipapi.co/json');
            const data = await response.json();
            if (data) {
                const lat = data.latitude;
                const lng = data.longitude;
                makeCoordGeoPositionCall(lat, lng);
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    // make an initial call for api using user's location
    useEffect(() => {
        fetchCurrentLocation();
    }, []);

    useEffect(() => {
        const newForecastInfo = [
            {
                name: 'wind',
                value: currentWeather.wind_kph,
                unit: 'km/h',
                moreInfo: {
                    value: currentWeather.wind_degree,
                    unit: 'deg',
                },
            },
            {
                name: 'humidity',
                value: currentWeather.humidity,
                unit: '%',
            },
            {
                name: 'visibility',
                value: currentWeather.vis_km,
                unit: 'km',
            },
            {
                name: 'UV index',
                value: currentWeather.uv,
                unit: '',
            },
            {
                name: 'pressure',
                value: currentWeather.pressure_mb,
                unit: 'mb',
            },
        ];
        setForecastInfo(newForecastInfo);
    }, [currentWeather]);

    return (
        <GlobalContext.Provider
            value={{
                city,
                setCity,
                forecastInfo,
                location,
                currentWeather,
                weatherForecast,
                loading,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => useContext(GlobalContext);

export default GlobalProvider;
