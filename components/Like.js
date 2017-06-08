class Like extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: Number(this.props.likes)
        };
        this.like = _.bind(this.like, this);
    }
    like() {
        this.setState({likes: this.state.likes + 1});
    }
    render() {
        return (
            DOM.span(
                null,
                DOM.button({onClick: this.like}, `Like`),
                DOM.span(null, `${this.state.likes}`)
            )
        );
    }
}

Like.propTypes = {
    likes: PropTypes.string
};

Like.defaultProps = {
    likes: '0'
}
