import React from 'react';
import {Router, browserHistory, match} from 'react-router';
import routes from 'routes';
import {Provider} from 'react-redux';
import store from 'store';
import prepareData from 'helpers/prepareData';

const historyCb = (location) => {
    match(
        {location, routes},
        (err, redirect, state) => {
            if (!err && !redirect) {
                prepareData(store, state);
            }
        }
    );
};

browserHistory.listenBefore(historyCb);

historyCb(window.location);

const App = () => (
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>
);

export default App;
