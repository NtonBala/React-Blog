import React from 'react';
import {DOM, PropTypes} from 'react';

const TextBox = ({description}) => (
    DOM.span(null, description)
);

TextBox.propTypes = {
    description: PropTypes.string
};

TextBox.defaultProps = {
    description: 'Lorem ipsum dolor sit amet...'
};

export default TextBox;
