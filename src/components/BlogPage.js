import React, {PropTypes} from 'react';
import BlogList from './widgets/blog/BlogList';
import PieChart from './widgets/blog/PieChart';
import {map} from 'lodash/collection';
import Error from 'components/elements/Error';
import Spinner from 'components/elements/Spinner';

const BlogPage = ({blogItems, like, error, isRequesting}) => {
    const columns = map(
        blogItems,
        item => [item.title, item.metaInfo.likes]
    );

    if (error) return <Error/>;

    if (isRequesting) return <Spinner/>;

    else return (
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
    like: BlogList.propTypes.like,
    error: PropTypes.bool,
    isRequesting: PropTypes.bool
};

BlogPage.defaultProps = {
    blogItems: BlogList.defaultProps.blogItems,
    like: BlogList.defaultProps.like,
    error: false,
    isRequesting: false
};

export default BlogPage;
