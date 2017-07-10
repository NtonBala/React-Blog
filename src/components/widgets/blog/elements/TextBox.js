import React, {DOM, PropTypes} from 'react';

import {Segment} from 'semantic-ui-react';

const TextBox = ({description}) => (
    React.createElement(
        Segment,
        {vertical: true, basic: true},
        DOM.span(null, description)
    )
);

TextBox.propTypes = {
    description: PropTypes.string
};

TextBox.defaultProps = {
    description: 'Lorem ipsum dolor sit amet...'
};

export default TextBox;
