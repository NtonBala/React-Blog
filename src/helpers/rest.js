import request from 'superagent';

export const fetchPosts = (setNewState) => {
    request.get(
        'http://localhost:3001/posts',
        {},
        (err, res) => setNewState(res.body)
    );
};

export const fetchPost = (_id, setNewState) => {
    request.get(
        `http://localhost:3001/posts/${_id}`,
        {},
        (err, res) => setNewState(res.body)
    );
};

export const fetchMetaInfo = (_id, update, state, setNewState) => {
    request.get(
        `http://localhost:3001/metainfo/${_id}`,
        {},
        (err, res) => update(state, res.body, setNewState, _id)
    );
};
