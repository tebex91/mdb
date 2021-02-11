import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundary from './components/error-boundary';
import MdbServiceContext from './components/mdb-service-context';
import MdbService from './services/mdb-service';

import store from './store';

const mdbService = new MdbService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <MdbServiceContext.Provider value={ mdbService }>
                <Router>
                    <App />
                </Router>
            </MdbServiceContext.Provider>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root'));