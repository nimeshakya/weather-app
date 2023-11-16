import React, { useEffect, useState } from 'react';

// import axios from 'axios';

import GlobalProvider from './context/GlobalContext';
import Cities from './components/cities/Cities';
import ForecastCard from './components/forecast_card/ForecastCard';
const App = () => {
    return (
        <>
            <GlobalProvider>
                <div className='app-container'>
                    <div className='app-components-container'>
                        <Cities />
                        <ForecastCard />
                    </div>
                </div>
            </GlobalProvider>
        </>
    );
};

export default App;
