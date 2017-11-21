import * as types from '../constants/actionTypes/PostsActionTypes';
import request from 'superagent';
import {API_ROOT} from '../constants/API';

//fetching posts
const requestPosts = () => ({
    type: types.FETCH_POSTS_REQUEST
});

const errorPosts = () => ({
    type: types.FETCH_POSTS_ERROR
});

const receivePosts = (response) => ({
    type: types.FETCH_POSTS_SUCCESS,
    response
});

export const fetchPosts = () => (
    (dispatch) => {
        dispatch(requestPosts());

        return request
            .get(`${API_ROOT}/posts`)
            .end((err, response) => {
                err ? dispatch(errorPosts()) :
                    dispatch(receivePosts(response.body));
            });
    }
);
