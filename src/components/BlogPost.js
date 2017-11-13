import React, {PropTypes} from 'react';
import BlogItem from 'components/widgets/blog/BlogItem';
import {Item} from 'semantic-ui-react';

const BlogPost = ({blogItem, like}) => (
    <Item.Group>
        {blogItem && <BlogItem
            {...blogItem}
            like={() => like(blogItem._id)}
        />}
    </Item.Group>
);

BlogPost.propTypes = {
    blogItem: PropTypes.object,
    like: BlogItem.propTypes.like
};

export default BlogPost;
