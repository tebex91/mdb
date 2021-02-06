import React from 'react';

import './error-indicator.sass';
import errorLogo from './error.png';

const ErrorIndicator = () => {
    return (
        <div>
            <img src={errorLogo} alt="error"/>
            <p>Oops!<br />
               Something went wrong.</p>
        </div>
    )
}

export default ErrorIndicator;