import React, {PropTypes} from 'react';
import {map} from 'lodash/collection';
import BlogItem from './BlogItem';
import {List, Segment} from 'semantic-ui-react';

const BlogList = ({blogItems}) => {
    return (<List>
        {map(blogItems, item => (
            <List.Item key={item._id}>
                <Segment compact={true}>
                    <BlogItem {...item}/>
                </Segment>
            </List.Item>
        ))}
    </List>);
};

BlogList.propTypes = {
    blogItems: PropTypes.arrayOf(
        PropTypes.shape(BlogItem.propTypes)
    )
};

BlogList.defaultProps = {
    blogItems: [BlogItem.defaultProps]
};

export default BlogList;
