//need lodash & moment, for rendering onto html add <div id="demo">
const {DOM, PropTypes} = React;

const data = [
    {
        _id: '676hjh67',
        image: {
            src: 'https://upload.wikimedia.org/wikipedia/en/0/07/Valerian_and_the_City_of_a_Thousand_Planets.jpg',
            alt: 'image Valerian'
        },
        description: 'In the 28th century, Valerian (Dane DeHaan) and Laureline (Cara Delevingne) are special operatives charged with keeping order throughout the human territories. On assignment from the Minister of Defense, the two undertake a mission to Alpha, an ever-expanding metropolis where species from across the universe have converged over centuries to share knowledge, intelligence, and culture. At the center of Alpha is a mysterious dark force which threatens the peaceful existence of the City of a Thousand Planets, and Valerian and Laureline must race to identify the menace and safeguard not just Alpha, but the future of the universe.',
        metaInfo: {
            author: 'Luc Bossiy',
            created: '2017-05-30T10:32:22.425Z',
            modified: '2017-06-01T06:11:01.425Z',
            likes: '19'
        }
    },
    {
        _id: 'jk089d42',
        image: {
            src: 'https://upload.wikimedia.org/wikipedia/en/e/ed/Wonder_Woman_%282017_film%29.jpg',
            alt: 'image Wonder Woman'
        },
        description: 'In the early 20th century, the Amazon princess Diana, who is living on the island of Themyscira, meets American military pilot Steve Trevor when he washes ashore. After learning from him about the ongoing events of World War I, she leaves her home for London to bring an early end to the war.',
        metaInfo: {
            author: 'Gal Gadalka',
            created: '2017-06-03T18:58:47.425Z',
            modified: '2017-06-03T18:58:47.425Z',
            likes: '31'
        }
    },
    {
        _id: '2378huy1',
        image: {
            src: 'https://upload.wikimedia.org/wikipedia/en/a/a2/The_Mummy_%282017%29.jpg',
            alt: 'image The Mummy'
        },
        description: 'Tom Cruise headlines a spectacular, all-new cinematic version of the legend that has fascinated cultures all over the world since the dawn of civilization: The Mummy. Thought safely entombed in a tomb deep beneath the unforgiving desert, an ancient princess (Sofia Boutella of Kingsman: The Secret Service and Star Trek Beyond) whose destiny was unjustly taken from her is awakened in our current day, bringing with her malevolence grown over millennia and terrors that defy human comprehension. From the sweeping sands of the Middle East through hidden labyrinths under modern-day London, The Mummy brings a surprising intensity and balance of wonder and thrills in an imaginative new take that ushers in a new world of gods and monsters.',
        metaInfo: {
            author: 'Tom Cousin',
            created: '2017-06-07T12:03:23.425Z',
            modified: '2017-06-07T13:57:12.425Z',
            likes: '27'
        }
    }
];

//IMAGE COMPONENT
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

//TEXTBOX COMPONENT
const TextBox = ({description}) => (
    DOM.span(null, description)
);

TextBox.propTypes = {
    description: PropTypes.string
};

TextBox.defaultProps = {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
};

//METAINFO COMPONENT
const MetaInfo = ({author, created, modified}) => (
    DOM.span(
        null,
        `${author} ${moment(created).format('DD.MM.YY kk:mm')}`,
        modified && DOM.span(null, `(last modified: ${moment(modified).format('DD.MM.YY kk:mm')})`)
    )
);

MetaInfo.propTypes = {
    author: PropTypes.string,
    created: PropTypes.string,
    modified: PropTypes.string
};

MetaInfo.defaultProps = {
    author: 'Anonymous',
    created: '1970-01-01T00:00:00.013Z',
    modified: '1970-01-01T00:00:00.013Z'
};

//LIKE COMPONENT
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
                isNaN(this.state.likes) || DOM.span(null, `${this.state.likes}`)
            )
        );
    }
}

Like.propTypes = {
    likes: PropTypes.string
};

Like.defaultProps = {
    likes: '0'
};


//BLOGITEM COMPONENT
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

//BLOGLIST COMPONENT
class BlogList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {blogItems} = this.props;
        return (
            DOM.ul(null, _.map(blogItems, (blogItem) => (
                    DOM.li(
                        {key: blogItem._id},
                        React.createElement(
                            BlogItem,
                            _.assign({}, _.pick(blogItem, ['description', 'image', 'metaInfo']))
                        ))
                )
            )
        )
    );
    }
}

BlogList.propTypes = {
    blogItems: PropTypes.arrayOf(PropTypes.shape(
        _.assign({}, {_id: PropTypes.string.isRequired}, BlogItem.propTypes)
    ))
};

BlogList.defaultProps = {
    blogItems: [_.assign({}, {_id: 'gh67tf51'}, BlogItem.defaultProps)]
};

//BLOGPAGE COMPONENT
class BlogPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {blogItems} = this.props;
        return (
            React.createElement(BlogList, {blogItems})
        );
    }
}

BlogPage.propTypes = {
    blogItems: BlogList.propTypes.blogItems
};

BlogPage.defaultProps = {
    blogItems: BlogList.defaultProps.blogItems
};

//RENDER BLOGPAGE
ReactDOM.render(
    React.createElement(BlogPage, {blogItems: data}),
    document.getElementById('demo')
);
