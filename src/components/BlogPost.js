import React, {PropTypes} from 'react';

import _ from 'lodash';

import {updateItemMetaInfo as update} from 'helpers/like';

import BlogItem from 'components/widgets/blog/BlogItem';

import {fetchPost, fetchMetaInfo} from 'helpers/rest';

import {Item} from 'semantic-ui-react';

class BlogPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogItem: {}
        };
        this.like = _.bind(this.like, this);
    }
    like(_id) {
        const {blogItem} = this.state;

        fetchMetaInfo(_id, update, blogItem,
            (newBlogItem) => this.setState({blogItem: newBlogItem})
        );
    }
    componentDidMount() {
        fetchPost(
            this.props.params.post_id,
            (blogItem) => this.setState({blogItem})
        );
    }
    render() {
        const {blogItem} = this.state;

        return (
            <Item.Group>
                <BlogItem
                    {...blogItem}
                    like={() => this.like(blogItem._id)}
                />
            </Item.Group>
        );
    }
}

BlogPost.propTypes = {
    params: PropTypes.object
};

export default BlogPost;
