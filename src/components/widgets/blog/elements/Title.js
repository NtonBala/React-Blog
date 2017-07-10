import React, {PropTypes} from 'react';

import {Segment, Header} from 'semantic-ui-react';

const Title = ({title}) => (
    <Segment vertical basic>
        <Header size="large">{title}</Header>
    </Segment>
);

Title.propTypes = {
    title: PropTypes.string
};

Title.defaultProps = {
    title: 'Title'
};

export default Title;
