import React from 'react';
import {DOM, PropTypes} from 'react';

const Like = ({likes, like}) => (
    DOM.span(
        null,
        DOM.button({onClick: () => like()}, 'Like'),
        isNaN(likes) || DOM.span(null, `${likes}`)
    )
);

Like.propTypes = {
    likes: PropTypes.number,
    like: PropTypes.func
};

Like.defaultProps = {
    likes: 0
};

export default Like;
