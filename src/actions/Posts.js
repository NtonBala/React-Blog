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

//increment post likes
const requestIncrementLikes = () => ({
    type: types.INCREMENT_POSTS_LIKES_REQUEST
});

const errorIncrementLikes = () => ({
    type: types.INCREMENT_POSTS_LIKES_ERROR
});

const successIncrementLikes = (id) => ({
    type: types.INCREMENT_POSTS_LIKES_SUCCESS,
    id
});

export const incrementLikes = (id) => (
    (dispatch) => {
        dispatch(requestIncrementLikes());

        return request
            .put(`${API_ROOT}/posts/${id}`)
            .end((err) => {
                err ? dispatch(errorIncrementLikes()) :
                    dispatch(successIncrementLikes(id));
            });
    }
);
