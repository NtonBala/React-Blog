class BlogItem extends React.Component {
    render() {
        const {_id, image, description, metaInfo, like} = this.props;
        return (
            DOM.div(
                null,
                React.createElement(Image, {
                    src: image.src,
                    alt: image.alt,
                    width: '300px',
                    height: '450px'
                }),
                React.createElement(TextBox, {description}),
                React.createElement(MetaInfo, {
                    author: metaInfo.author,
                    created: metaInfo.created,
                    modified: metaInfo.modified
                }),
                React.createElement(Like, {_id, likes: metaInfo.likes, like})
            )
        );
    }
}

BlogItem.propTypes = {
    _id: Like.propTypes._id,
    image: PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string
    }),
    description: PropTypes.string,
    metaInfo: PropTypes.shape(_.assign({}, MetaInfo.propTypes, _.pick(Like.propTypes, ['likes']))),
    like: Like.propTypes.like
};

BlogItem.defaultProps = {
    _id: Like.defaultProps.likes,
    image: Image.defaultProps,
    description: TextBox.defaultProps.description,
    metaInfo: _.assign({}, MetaInfo.defaultProps, _.pick(Like.defaultProps, ['likes'])),
    like: Like.defaultProps.like
};
