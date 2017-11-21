import React, {PropTypes} from 'react';

import {Segment, Button} from 'semantic-ui-react';

const Like = ({likes, like, id}) => (
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
                onClick: () => like(id)
            }
        )
    )
);

Like.propTypes = {
    likes: PropTypes.number,
    like: PropTypes.func,
    id: PropTypes.string
};

Like.defaultProps = {
    likes: 0,
    like: () => true,
    id: '676hjh67'
};

export default Like;
