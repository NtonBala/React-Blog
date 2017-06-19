class BlogList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {blogItems, like} = this.props;
        return (
            DOM.ul(null, _.map(blogItems, (blogItem) => (
                    DOM.li(
                        {key: blogItem._id},
                        React.createElement(
                            BlogItem,
                            _.assign(
                                {},
                                blogItem,
                                {like}
                            )
                        ))
                )
            )
        )
    );
    }
}

BlogList.propTypes = {
    blogItems: PropTypes.arrayOf(PropTypes.shape(BlogItem.propTypes)),
    like: BlogItem.propTypes.like
};

BlogList.defaultProps = {
    blogItems: [_.omit(BlogItem.defaultProps, ['like'])],
    like: BlogItem.defaultProps.like
};
