Like.propTypes = {
    _id: PropTypes.string,
    likes: PropTypes.number,
    like: PropTypes.func
};

Like.defaultProps = {
        _id: '676hjh67',
        likes: 0,
        like: (id) => console.log(id)
};
