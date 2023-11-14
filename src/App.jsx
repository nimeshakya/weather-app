import React, { useEffect, useState } from 'react';

// import axios from 'axios';

import GlobalProvider from './context/GlobalContext';
import Cities from './components/cities/Cities';
import CitiesSelection from './components/cities/CitiesSelection';

const App = () => {
    return (
        <>
            <GlobalProvider>
                <Cities />
                <CitiesSelection />
            </GlobalProvider>
        </>
    );
};

export default App;
