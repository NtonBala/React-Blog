import {assign} from 'lodash/object';
import {isEmpty} from 'lodash/lang';
import * as types from '../constants/actionTypes/PostActionTypes';
import update from 'immutability-helper';
import {REQUEST_INCREMENT_LIKE} from '../constants/actionTypes/actionTypes';

const initialState = {
    isFetching: false,
    error: false,
    entry: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_POST_REQUEST:
            return assign({}, initialState, {isFetching: true});
        case types.FETCH_POST_ERROR:
            return assign({}, initialState, {error: true});
        case types.FETCH_POST_SUCCESS:
            return assign({}, initialState, {entry: action.response});
        case REQUEST_INCREMENT_LIKE:
            return isEmpty(state.entry) ? state : update(state, {
                entry: {
                    metaInfo: {
                        likes: {$apply: (count) => (count + 1)}
                    }
                }
            });
        default:
            return state;
    }
};
