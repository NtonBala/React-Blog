class BlogList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {blogItems} = this.props;
        return (
            DOM.ul(null, _.map(blogItems, (blogItem) => (
                    DOM.li(
                        {key: blogItem._id},
                        React.createElement(
                            BlogItem,
                            _.pick(blogItem, ['description', 'image', 'metaInfo'])
                        ))
                )
            )
        )
    );
    }
}

BlogList.propTypes = {
    blogItems: PropTypes.arrayOf(PropTypes.shape(
        _.assign({}, {_id: PropTypes.string.isRequired}, BlogItem.propTypes)
    ))
};

BlogList.defaultProps = {
    blogItems: [_.assign({}, {_id: 'gh67tf51'}, BlogItem.defaultProps)]
};
