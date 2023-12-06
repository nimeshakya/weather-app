import React from 'react';
import { useGlobalContext } from '../../context/GlobalContext';

import './CitySearchResults.scss';

const CitySearchResults = ({
    searchResults,
    highlightedResultIdx,
    setSearchResults,
    setSearchValue,
}) => {
    const { setCity } = useGlobalContext();

    const handleResultClick = (resultIdx) => {
        console.log(resultIdx);
        setCity(searchResults[resultIdx]);
        setSearchResults([]);
        setSearchValue('');
    };

    return (
        <ul className='search-results'>
            {searchResults.map((result, index) => {
                return (
                    <li key={index} onClick={() => handleResultClick(index)}>
                        <p>{result.name}</p>
                        <p>
                            {result.region === ''
                                ? `${result.name}, ${result.country}`
                                : `${result.name}, ${result.region}, ${result.country}`}
                        </p>
                    </li>
                );
            })}
        </ul>
    );
};

export default CitySearchResults;
