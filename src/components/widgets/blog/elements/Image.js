import React from 'react';
import {DOM, PropTypes} from 'react';

import {Segment} from 'semantic-ui-react';

const Image = ({src, width, height, alt}) => (
    React.createElement(
        Segment,
        {textAlign: 'center'},
        DOM.img(
            {
                src,
                alt,
                style: {
                    width,
                    height
                }
            }
        )
    )
);

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
};

Image.defaultProps = {
    src: 'http://via.placeholder.com/300x450',
    alt: 'Blog item image',
    width: '100%',
    height: '100%'
};

export default Image;
