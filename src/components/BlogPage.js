import React from 'react';

import _ from 'lodash';
import update from 'immutability-helper';

import BlogList from 'components/widgets/blog/BlogList';
import PieChart from 'components/widgets/blog/PieChart';

class BlogPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogItems: this.props.blogItems
        };
        this.like = _.bind(this.like, this);
    }
    like(id) {
        const {blogItems} = this.state,
            index = _.findIndex(blogItems, {_id: id});

        const newBlogItems = update(
            blogItems,
            {[index]: {metaInfo: {likes: {$apply: x => x + 1}}}}
        );

        this.setState({blogItems: newBlogItems});
    }
    render() {
        const {blogItems} = this.state,
            columns = _.map(
                blogItems,
                item => [item.title, item.metaInfo.likes]
            );

        return (
            <div style={{width:'80%', margin:'20px auto 40px auto'}}>
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

BlogPage.propTypes = {
    blogItems: BlogList.propTypes.blogItems
};

BlogPage.defaultProps = {
    blogItems: BlogList.defaultProps.blogItems
};

export default BlogPage;
