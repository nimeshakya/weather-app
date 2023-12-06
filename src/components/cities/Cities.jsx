import React, { useEffect, useRef, useState } from 'react';
import { useGlobalContext } from '../../context/GlobalContext';

import CitySearchResults from './CitySearchResults';

import './Cities.scss';

const url =
    'https://api.weatherapi.com/v1/search.json?key=5ab94554223c4f7eb12152758232410&q=';

const Cities = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [highlightedResultIdx, setHighlightedResultIdx] = useState(0);

    const searchInputRef = useRef('');

    // when pressed input after input field
    const handleSubmit = (e) => {
        e.preventDefault();
        if (e.target.value === '') {
            console.log('empty string!');
        }
    };

    // clear input field and search suggestions when clicked out of input
    const handleInputBlur = (e) => {
        setSearchValue('');
        setSearchResults([]);
    };

    const serachForResults = async (searchText) => {
        try {
            const response = await fetch(url + searchText);
            const data = await response.json();
            setSearchResults(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (searchValue !== '') {
            serachForResults(searchValue);
        } else {
            setSearchResults([]);
        }
    }, [searchValue]);

    // effect of changing styles of elements
    useEffect(() => {
        if (searchResults.length !== 0) {
            searchInputRef.current.classList.add('city-searcher-with-result');
        } else {
            searchInputRef.current.classList.remove(
                'city-searcher-with-result'
            );
        }
    }, [searchResults]);

    return (
        <div className='city-searcher'>
            <form onSubmit={handleSubmit}>
                <input
                    type='search'
                    name='city-searcher-input'
                    ref={searchInputRef}
                    id='city-searcher-input'
                    className='city-searcher-input'
                    placeholder='Search your locations...'
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </form>

            {searchResults.length !== 0 && (
                <CitySearchResults
                    searchResults={searchResults}
                    highlightedResultIdx={highlightedResultIdx}
                    setSearchValue={setSearchValue}
                    setSearchResults={setSearchResults}
                />
            )}
        </div>
    );
};

export default Cities;
