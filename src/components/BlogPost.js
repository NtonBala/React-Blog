import React, {PropTypes} from 'react';
import BlogItem from 'components/widgets/blog/BlogItem';
import {Item} from 'semantic-ui-react';
import {isEmpty} from 'lodash/lang';

const BlogPost = ({blogItem}) => (
    <Item.Group>
        {!isEmpty(blogItem) && <BlogItem {...blogItem}/>}
    </Item.Group>
);

BlogPost.propTypes = {
    blogItem: PropTypes.object
};

BlogPost.defaultProps = {
    blogItem: {
        _id: BlogItem.defaultProps._id,
        image: BlogItem.defaultProps.image,
        title: BlogItem.defaultProps.title,
        description: BlogItem.defaultProps.description,
        metaInfo: BlogItem.defaultProps.metaInfo
    }
};

export default BlogPost;
