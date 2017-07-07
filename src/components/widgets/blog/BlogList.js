import React from 'react';
import {PropTypes} from 'react';

import _ from 'lodash';

import BlogItem from './BlogItem';

import {List, Segment} from 'semantic-ui-react';

const BlogList = ({blogItems, like}) => (
    React.createElement(List, null, _.map(blogItems, (blogItem) => (
        React.createElement(
            List.Item,
            {key: blogItem._id},
            React.createElement(
                Segment,
                {
                    compact: true
                },
                React.createElement(
                    BlogItem,
                    _.assign(
                        {},
                        blogItem,
                        {like: () => like(blogItem._id)}
                    )
                )
            )
        )
    )))
);

BlogList.propTypes = {
    blogItems: PropTypes.arrayOf(
        PropTypes.shape(_.omit(BlogItem.propTypes, ['like']))
    ),
    like: BlogItem.propTypes.like
};

BlogList.defaultProps = {
    blogItems: [_.omit(BlogItem.defaultProps, ['like'])],
    like: BlogItem.defaultProps.like
};

export default BlogList;
