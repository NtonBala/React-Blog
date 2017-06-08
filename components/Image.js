const Image = ({src, width, height, alt}) => (
    DOM.img(
        {
            src: src,
            alt: alt,
            style: {
                width: width,
                height: height
            }
        }
    )
);

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
};

Image.defaultProps = {
    src: 'http://via.placeholder.com/300x450',
    alt: 'Blog item image',
    width: '300px',
    height: '450px'
};
