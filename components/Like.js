class Like extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: this.props.likes
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
                isNaN(this.state.likes) || DOM.span(null, `${this.state.likes}`)
            )
        );
    }
}

Like.propTypes = {
    likes: PropTypes.number
};

Like.defaultProps = {
    likes: 0
};
