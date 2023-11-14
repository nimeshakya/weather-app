import React from 'react';
import { useGlobalContext } from '../../context/GlobalContext';

const CitiesSelection = () => {
    const globalContext = useGlobalContext();

    const handleCityChange = (e) => {
        globalContext.setCity(e.target.value);
    };

    return (
        <>
            <label htmlFor='cities'>Choose a city:</label>
            <select
                name='cities'
                id='cities'
                value={globalContext.city}
                onChange={handleCityChange}
            >
                <option value='bhaktapur'>Bhaktapur</option>
                <option value='kathmandu'>Kathmandu</option>
                <option value='lalitpur'>Lalitpur</option>
            </select>
        </>
    );
};

export default CitiesSelection;
