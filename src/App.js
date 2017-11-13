import React from 'react';
import {Router, browserHistory, match} from 'react-router';
import routes from 'routes';
import {Provider} from 'react-redux';
import store from 'store';
import prepareData from 'helpers/prepareData';
import ReactDOM from 'react-dom';
import DevTools from 'containers/DevTools';

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

ReactDOM.render(
    <DevTools store={store}/>,
    document.getElementById('devtools')
);

export default App;
