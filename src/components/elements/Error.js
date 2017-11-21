import React from 'react';
import {Segment, Header} from 'semantic-ui-react';

const Error = () => (
    <Segment>
        <Header
            size='small'
            style={{color: '#4183c4'}}
        >Oops! Some Error occured!</Header>
    </Segment>
);

export default Error;
