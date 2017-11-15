import * as types from '../constants/actionTypes/PostActionTypes';
import request from 'superagent';
import {API_ROOT} from '../constants/API';

//fetching post
const requestPost = () => ({
    type: types.FETCH_POST_REQUEST
});

const errorPost = () => ({
    type: types.FETCH_POST_ERROR
});

const receivePost = (response) => ({
    type: types.FETCH_POST_SUCCESS,
    response
});

export const fetchPost = (id) => (
    (dispatch) => {
        dispatch(requestPost(id));

        return request
            .get(`${API_ROOT}/posts/${id}`)
            .end((err, response) => {
                err ? dispatch(errorPost(id)) :
                    dispatch(receivePost(response.body));
            });
    }
);

//incrementing likes for specified post
const requestIncrementLikes = () => ({
    type: types.INCREMENT_POST_LIKES_REQUEST
});

const errorIncrementLikes = () => ({
    type: types.INCREMENT_POST_LIKES_ERROR
});

const successIncrementLikes = () => ({
    type: types.INCREMENT_POST_LIKES_SUCCESS
});

export const incrementLikes = (id) => (
    (dispatch) => {
        dispatch(requestIncrementLikes(id));

        return request
            .put(`${API_ROOT}/posts/${id}`)
            .end((err) => {
                err ? dispatch(errorIncrementLikes()) :
                    dispatch(successIncrementLikes());
            });
    }
);
