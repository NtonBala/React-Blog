import React, {PropTypes} from 'react';

import {Segment, Button} from 'semantic-ui-react';

const Like = ({likes, like}) => (
    React.createElement(
        Segment,
        {vertical: true, textAlign: 'right', basic: true},
        React.createElement(
            Button,
            {
                content: 'Like',
                icon: 'heart',
                label: {
                    basic: true,
                    content: likes
                },
                labelPosition: 'right',
                onClick: () => like()
            }
        )
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
