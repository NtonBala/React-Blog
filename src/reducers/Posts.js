import {assign} from 'lodash/object';
import {isEmpty} from 'lodash/lang';
import * as types from '../constants/actionTypes/PostsActionTypes';
import {map} from 'lodash/collection';
import update from 'immutability-helper';
import {REQUEST_INCREMENT_LIKE} from '../constants/actionTypes/actionTypes';

const initialState = {
    isFetching: false,
    error: false,
    entries: []
};

const incrementLikes = (state, action) => (
    state._id !== action.id ? state :
        update(state, {
            metaInfo: {likes: {$apply: (count) => (count + 1)}}
        })
);

export default (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_POSTS_REQUEST:
            return assign({}, initialState, {isFetching: true});
        case types.FETCH_POSTS_ERROR:
            return assign({}, initialState, {error: true});
        case types.FETCH_POSTS_SUCCESS:
            return assign({}, initialState, {entries: action.response});
        case REQUEST_INCREMENT_LIKE:
            return isEmpty(state.entries) ? state : assign({}, state, {
                entries: map(state.entries,
                    (post) => incrementLikes(post, action))
            });
        default:
            return state;
    }
};
