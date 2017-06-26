const BlogList = ({blogItems, like}) => (
    DOM.ul(null, _.map(blogItems, (blogItem) => (
        DOM.li(
            {key: blogItem._id},
            React.createElement(
                BlogItem,
                _.assign(
                    {},
                    blogItem,
                    {like: () => like(blogItem._id)}
                )
            )
        )
    )))
);

BlogList.propTypes = {
    blogItems: PropTypes.arrayOf(PropTypes.shape(_.omit(BlogItem.propTypes, ['like']))),
    like: BlogItem.propTypes.like
};

BlogList.defaultProps = {
    blogItems: [_.omit(BlogItem.defaultProps, ['like'])],
    like: BlogItem.defaultProps.like
};
