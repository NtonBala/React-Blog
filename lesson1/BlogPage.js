class BlogPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            React.createElement(BlogList, {blogItems})
        );
    }
}
