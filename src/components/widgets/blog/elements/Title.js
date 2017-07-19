import React, {PropTypes} from 'react';

import {Segment, Header} from 'semantic-ui-react';

import Link from 'components/elements/Link';
import {postsPath} from 'helpers/routes';

const Title = ({title, index}) => (
    <Segment vertical basic>
        <Header size="large">
            <Link to={postsPath(index)}>{title}</Link>
        </Header>
    </Segment>
);

Title.propTypes = {
    title: PropTypes.string
};

Title.defaultProps = {
    title: 'Title'
};

export default Title;
