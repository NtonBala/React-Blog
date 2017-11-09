import React, {PropTypes} from 'react';

import {Segment, Header, Container} from 'semantic-ui-react';

import Link from 'components/elements/Link';

const MainLayout = ({children}) => (
    <Container>
        <Logo/>
        {children}
        <Footer/>
    </Container>
);

MainLayout.propTypes = {
    children: PropTypes.node
};

const Logo = () => (
    <Segment>
        <Header>
            <Link to="/">React Blog by Anton Balashov</Link>
        </Header>
    </Segment>
);

const Footer = () => (
    <Segment>
        Powered by Thinknetica React Course
    </Segment>
);

export default MainLayout;
