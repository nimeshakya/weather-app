import React from 'react';
import { useGlobalContext } from '../../context/GlobalContext';

const Cities = () => {
    const { city } = useGlobalContext();

    return <div>{city}</div>;
};

export default Cities;
