import {assign} from 'lodash/object';
import * as types from '../constants/actionTypes/PostsActionTypes';
import {map} from 'lodash/collection';
import update from 'immutability-helper';

const initialState = {
    isRequesting: false,
    error: false,
    entries: []
};

const incrementLikes = (state, action) => (
    state.id !== action.id ? state :
        update(state, {
            metaInfo: {likes: {$apply: (count) => (count + 1)}}
        })
);

export default (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_POSTS_REQUEST:
            return assign({}, initialState, {isRequesting: true});
        case types.FETCH_POSTS_ERROR:
            return assign({}, initialState, {error: true});
        case types.FETCH_POSTS_SUCCESS:
            return assign({}, initialState, {entries: action.response});
        case types.INCREMENT_POSTS_LIKES_REQUEST:
            return assign({}, state, {isRequesting: true});
        case types.INCREMENT_POSTS_LIKES_ERROR:
            return assign({}, state, {isRequesting: false, error: true});
        case types.INCREMENT_POSTS_LIKES_SUCCESS:
            return assign({}, state, {
                isRequesting: false,
                error: false,
                entries: map(state.entries,
                    (post) => incrementLikes(post, action))
            });
        default:
            return state;
    }
};
