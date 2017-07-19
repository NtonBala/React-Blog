import React from 'react';

import _ from 'lodash';
import {getNewBlogItems as update} from 'helpers/like';

import BlogList from 'components/widgets/blog/BlogList';
import PieChart from 'components/widgets/blog/PieChart';

import {fetchPosts} from 'helpers/rest';

class BlogPage extends React.Component {
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
            columns = _.map(
                blogItems,
                item => [item.title, item.metaInfo.likes]
            );

        return (
            <div>
                <BlogList
                    blogItems = {blogItems}
                    like = {this.like}
                />
                <PieChart
                    columns = {columns}
                />
            </div>
        );
    }
}

export default BlogPage;
