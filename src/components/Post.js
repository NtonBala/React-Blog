import React, {PropTypes} from 'react';

import _ from 'lodash';
import {getNewBlogItems as update} from 'helpers/like';

import BlogItem from 'components/widgets/blog/BlogItem';

import {fetchPosts} from 'helpers/rest';

import {Item} from 'semantic-ui-react';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogItems: []
        };
        this.like = _.bind(this.like, this);
    }
    like(id) {
        const {blogItems} = this.state,
            newBlogItems = update(blogItems, id);
        this.setState({blogItems: newBlogItems});
    }
    componentDidMount() {
        fetchPosts(
            (blogItems) => this.setState({blogItems})
        );
    }
    render() {
        const {blogItems} = this.state,
            itemIndex = this.props.params.id,
            blogItem = blogItems[itemIndex];

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

Post.propTypes = {
    params: PropTypes.object
};

export default Post;
