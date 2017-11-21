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
