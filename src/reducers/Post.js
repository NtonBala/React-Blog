import {assign} from 'lodash/object';
import * as types from '../constants/actionTypes/PostActionTypes';
import update from 'immutability-helper';

const initialState = {
    isRequesting: false,
    error: false,
    entry: {}
};

export default (state, action) => {
    switch (action.type) {
        case types.FETCH_POST_REQUEST:
            return assign({}, initialState, {isRequesting: true});
        case types.FETCH_POST_ERROR:
            return assign({}, initialState, {error: true});
        case types.FETCH_POST_SUCCESS:
            return assign({}, initialState, {entry: action.response});
        case types.INCREMENT_POST_LIKES_REQUEST:
            return assign({}, state, {isRequesting: true});
        case types.INCREMENT_POST_LIKES_ERROR:
            return assign({}, state, {isRequesting: false, error: true});
        case types.INCREMENT_POST_LIKES_SUCCESS:
            return update(state, {
                isRequesting: false,
                error: false,
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
