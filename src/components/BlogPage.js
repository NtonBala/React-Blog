import React from 'react';
import BlogList from './widgets/blog/BlogList';
import PieChart from './widgets/blog/PieChart';
import {map} from 'lodash/collection';

const BlogPage = ({blogItems, like}) => {
    const columns = map(
        blogItems,
        item => [item.title, item.metaInfo.likes]
    );

    return (
        <div>
            <BlogList
                blogItems={blogItems}
                like={like}
            />
            <PieChart
                columns={columns}
            />
        </div>
    );
};

BlogPage.propTypes = {
    blogItems: BlogList.propTypes.blogItems,
    like: BlogList.propTypes.like
};

BlogPage.defaultProps = {
    blogItems: BlogList.defaultProps.blogItems,
    like: BlogList.defaultProps.like
};

export default BlogPage;
