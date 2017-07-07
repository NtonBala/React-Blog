import React from 'react';
import {DOM, PropTypes} from 'react';

import {formatDate} from 'helpers/date';

import {Segment} from 'semantic-ui-react';

const MetaInfo = ({author, created, modified}) => (
    React.createElement(
        Segment,
        {vertical: true},
        DOM.span(
            null,
            `${author} ${formatDate(created)}`,
            modified && DOM.span(
                null,
                ` (last modified: ${formatDate(modified)})`
            )
        )
    )
);

MetaInfo.propTypes = {
    author: PropTypes.string,
    created: PropTypes.string,
    modified: PropTypes.string
};

MetaInfo.defaultProps = {
    author: 'Anonymous',
    created: '1970-01-01T00:00:00.013Z',
    modified: '1970-01-01T00:00:00.013Z'
};

export default MetaInfo;
