class BlogItem extends React.Component {
    render() {
        const {image, description} = this.props;
        return (
            DOM.div(
                null,
                React.createElement(TextBox, {description}),
                React.createElement(Image, {
                    src: image.src,
                    alt: image.alt,
                    width: '300px',
                    height: '450px'
                })
            )
        );
    }
}
