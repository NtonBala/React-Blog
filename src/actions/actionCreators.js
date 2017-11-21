import {REQUEST_INCREMENT_LIKE} from '../constants/actionTypes/actionTypes';
import request from 'superagent';
import {API_ROOT} from '../constants/API';

//INCREMENT LIKE
const requestIncrementLike = (id) => ({
    type: REQUEST_INCREMENT_LIKE,
    id
});

export const incrementLike = (id) => (
    (dispatch) => {
        return request
            .put(`${API_ROOT}/posts/${id}`)
            .end((err) => {
                if (!err) dispatch(requestIncrementLike(id));
            });
    }
);
