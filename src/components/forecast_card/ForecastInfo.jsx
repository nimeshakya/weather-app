import React from 'react';
import { RxPaperPlane } from 'react-icons/rx';

import './ForecastInfo.scss';

const ForecastInfo = ({ info }) => {
    return (
        <div className='forecast-info-container'>
            <p>{info.name}</p>
            <p>
                {info.value} {info.unit}{' '}
                {info.moreInfo && (
                    <span>
                        <RxPaperPlane
                            style={{
                                transform: `rotate(${-info.moreInfo.value}deg)`,
                            }}
                        />
                    </span>
                )}
            </p>
        </div>
    );
};

export default ForecastInfo;
