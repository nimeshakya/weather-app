import React, { useState, createContext, useContext } from 'react';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    // we could use reducer here to use all states in an object
    // gonna skip that for this project
    const [city, setCity] = useState('bhaktapur');

    return (
        <GlobalContext.Provider value={{ city, setCity }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => useContext(GlobalContext);

export default GlobalProvider;
