import React, {PropTypes} from 'react';

import {Segment, Header} from 'semantic-ui-react';

import Link from 'components/elements/Link';
import {postsPath} from 'helpers/routes';

const Title = ({title, _id}) => (
    <Segment vertical basic>
        <Header size="large">
            <Link to={postsPath(_id)}>{title}</Link>
        </Header>
    </Segment>
);

Title.propTypes = {
    title: PropTypes.string,
    _id: PropTypes.string
};

Title.defaultProps = {
    title: 'Title',
    _id: '676hjh67'
};

export default Title;
