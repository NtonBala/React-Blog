import React from 'react';
import {Segment, Header} from 'semantic-ui-react';

const Spinner = () => (
    <Segment>
        <Header
            size='small'
            style={{color: '#4183c4'}}
        >Loading...</Header>
    </Segment>
);

export default Spinner;
