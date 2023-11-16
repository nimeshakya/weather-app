import React from 'react';
import { useGlobalContext } from '../../context/GlobalContext';

import './Cities.scss';

const Cities = () => {
    const { city } = useGlobalContext();

    return (
        <input
            type='search'
            name='city-searcher'
            id='city-searcher'
            placeholder='Search your locations...'
        />
    );
};

export default Cities;
