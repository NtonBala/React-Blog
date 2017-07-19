import request from 'superagent';

export const fetchPosts = (setNewState) => {
    request.get(
        'http://localhost:3001/',
        {},
        (err, res) => setNewState(res.body)
    );
};
