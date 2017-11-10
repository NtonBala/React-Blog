import React from 'react';
import {Router, browserHistory} from 'react-router';
import routes from 'routes';
import {Provider} from 'react-redux';
import store from 'store';

const App = () => (
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>
);

export default App;
