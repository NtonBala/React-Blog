class BlogList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {blogItems} = this.props;
        return (
            DOM.ul(null, _.map(blogItems, (blogItem, key) => (
                    DOM.li({key}, React.createElement(BlogItem, {
                        image: {
                            src: blogItem.src,
                            alt: blogItem.alt
                        },
                        description: blogItem.description
                    }))
                )))
    );
    }
}
