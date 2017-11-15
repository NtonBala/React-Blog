import React, {PropTypes} from 'react';
import BlogItem from 'components/widgets/blog/BlogItem';
import {Item} from 'semantic-ui-react';
import Error from 'components/elements/Error';
import Spinner from 'components/elements/Spinner';

const BlogPost = ({blogItem, like, isRequesting, error}) => (
    <Item.Group>
        {isRequesting && <Spinner/>}
        {error && <Error/>}
        {blogItem && <BlogItem
            {...blogItem}
            like={() => like(blogItem._id)}
        />}
    </Item.Group>
);

BlogPost.propTypes = {
    blogItem: PropTypes.object,
    like: BlogItem.propTypes.like,
    isRequesting: PropTypes.bool,
    error: PropTypes.bool
};

BlogPost.defaultProps = {
    blogItem: {
        _id: BlogItem.defaultProps._id,
        image: BlogItem.defaultProps.image,
        title: BlogItem.defaultProps.title,
        description: BlogItem.defaultProps.description,
        metaInfo: BlogItem.defaultProps.metaInfo
    },
    like: BlogItem.defaultProps.like,
    isRequesting: false,
    error: false
};

export default BlogPost;
