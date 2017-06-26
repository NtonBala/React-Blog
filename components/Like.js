const Like = ({likes, like}) => (
    DOM.span(
        null,
        DOM.button({onClick: (e) => like()}, `Like`),
        isNaN(likes) || DOM.span(null, `${likes}`)
    )
);

Like.propTypes = {
    likes: PropTypes.number,
    like: PropTypes.func
};

Like.defaultProps = {
    likes: 0,
    like: (id) => console.log(id)
};
