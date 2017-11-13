import {parse} from 'qs';
import {compact} from 'lodash/array';
import {map} from 'lodash/collection';

export default (store, state) => {
    const {location, params, routes} = state;

    const query = parse(location.search, {ignoreQueryPrefix: true});

    const prepareDataFns = compact(map(routes, route => route.prepareData));

    map(
        prepareDataFns,
        prepareData => prepareData(store, query, params, location)
    );
};
