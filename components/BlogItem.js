class BlogItem extends React.Component {
    render() {
        const {image, description, metaInfo} = this.props;
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
                React.createElement(Like, {likes: metaInfo.likes})
            )
        );
    }
}

BlogItem.propTypes = {
    image: PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string
    }),
    description: PropTypes.string,
    metaInfo: PropTypes.shape(_.assign({}, MetaInfo.propTypes, Like.propTypes))
};

BlogItem.defaultProps = {
    image: Image.defaultProps,
    description: TextBox.defaultProps.description,
    metaInfo: _.assign({}, MetaInfo.defaultProps, Like.defaultProps)
};
