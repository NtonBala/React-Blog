//need lodash, moment, d3 & c3; for rendering onto html add <div id="demo">
const {DOM, PropTypes} = React;

const data = [
    {
        _id: '676hjh67',
        image: {
            src: 'https://upload.wikimedia.org/wikipedia/en/0/07/Valerian_and_the_City_of_a_Thousand_Planets.jpg',
            alt: 'image Valerian'
        },
        title: 'Valerian and the City of a Thousand Planets',
        description: 'In the 28th century, Valerian (Dane DeHaan) and Laureline (Cara Delevingne) are special operatives charged with keeping order throughout the human territories. On assignment from the Minister of Defense, the two undertake a mission to Alpha, an ever-expanding metropolis where species from across the universe have converged over centuries to share knowledge, intelligence, and culture. At the center of Alpha is a mysterious dark force which threatens the peaceful existence of the City of a Thousand Planets, and Valerian and Laureline must race to identify the menace and safeguard not just Alpha, but the future of the universe.',
        metaInfo: {
            author: 'Luc Bossiy',
            created: '2017-05-30T10:32:22.425Z',
            modified: '2017-06-01T06:11:01.425Z',
            likes: 19
        }
    },
    {
        _id: 'jk089d42',
        image: {
            src: 'https://upload.wikimedia.org/wikipedia/en/e/ed/Wonder_Woman_%282017_film%29.jpg',
            alt: 'image Wonder Woman'
        },
        title: 'Wonder Woman (2017)',
        description: 'In the early 20th century, the Amazon princess Diana, who is living on the island of Themyscira, meets American military pilot Steve Trevor when he washes ashore. After learning from him about the ongoing events of World War I, she leaves her home for London to bring an early end to the war.',
        metaInfo: {
            author: 'Gal Gadalka',
            created: '2017-06-03T18:58:47.425Z',
            modified: '2017-06-03T18:58:47.425Z',
            likes: 31
        }
    },
    {
        _id: '2378huy1',
        image: {
            src: 'https://upload.wikimedia.org/wikipedia/en/a/a2/The_Mummy_%282017%29.jpg',
            alt: 'image The Mummy'
        },
        title: 'The Mummy (2017)',
        description: 'Tom Cruise headlines a spectacular, all-new cinematic version of the legend that has fascinated cultures all over the world since the dawn of civilization: The Mummy. Thought safely entombed in a tomb deep beneath the unforgiving desert, an ancient princess (Sofia Boutella of Kingsman: The Secret Service and Star Trek Beyond) whose destiny was unjustly taken from her is awakened in our current day, bringing with her malevolence grown over millennia and terrors that defy human comprehension. From the sweeping sands of the Middle East through hidden labyrinths under modern-day London, The Mummy brings a surprising intensity and balance of wonder and thrills in an imaginative new take that ushers in a new world of gods and monsters.',
        metaInfo: {
            author: 'Tom Cousin',
            created: '2017-06-07T12:03:23.425Z',
            modified: '2017-06-07T13:57:12.425Z',
            likes: 27
        }
    }
];

//IMAGE COMPONENT
const Image = ({src, width, height, alt}) => (
    DOM.img(
        {
            src,
            alt,
            style: {
                width,
                height
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


//BLOGITEM COMPONENT
class BlogItem extends React.Component {
    render() {
        const {_id, image, description, metaInfo, like} = this.props;
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
                React.createElement(Like, {likes: metaInfo.likes, like})
            )
        );
    }
}

BlogItem.propTypes = {
    _id: PropTypes.string,
    image: PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string
    }),
    description: PropTypes.string,
    metaInfo: PropTypes.shape(_.assign({}, MetaInfo.propTypes, _.pick(Like.propTypes, ['likes']))),
    like: Like.propTypes.like
};

BlogItem.defaultProps = {
    _id: '676hjh67',
    image: Image.defaultProps,
    description: TextBox.defaultProps.description,
    metaInfo: _.assign({}, MetaInfo.defaultProps, _.pick(Like.defaultProps, ['likes'])),
    like: Like.defaultProps.like
};

//BLOGLIST COMPONENT
const BlogList = ({blogItems, like}) => (
    DOM.ul(null, _.map(blogItems, (blogItem) => (
        DOM.li(
            {key: blogItem._id},
            React.createElement(
                BlogItem,
                _.assign(
                    {},
                    blogItem,
                    {like: () => like(blogItem._id)}
                )
            )
        )
    )))
);

BlogList.propTypes = {
    blogItems: PropTypes.arrayOf(PropTypes.shape(_.omit(BlogItem.propTypes, ['like']))),
    like: BlogItem.propTypes.like
};

BlogList.defaultProps = {
    blogItems: [_.omit(BlogItem.defaultProps, ['like'])],
    like: BlogItem.defaultProps.like
};


//PIECHART COMPONENT
class PieChart extends React.Component {
    componentDidMount() {
        const {columns} = this.props;
        this.pieChart = c3.generate({
            bindto: this.container,
            data: {
                columns,
                type: 'pie'
            }
        });
    }
    componentWillReceiveProps(props) {
        const {columns} = props;
        this.pieChart.load({columns});
    }
    componentWillUnmount() {
        this.pieChart = this.pieChart.destroy();
    }
    render() {
        return <div ref={el => this.container = el} />
    }
}

PieChart.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ])
    ))
};

PieChart.defaultProps = {
    columns: [['Valerian', 5]]
};

//BLOGPAGE COMPONENT
class BlogPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogItems: this.props.blogItems
        };
        this.like = _.bind(this.like, this);
    }
    like(id) {
        const {blogItems} = this.state,
            index = _.findIndex(blogItems, {_id: id});

        const newBlogItems = update(blogItems, {[index]: {metaInfo: {likes: {$apply: x => x + 1}}}});

        this.setState({blogItems: newBlogItems});
    }
    render() {
        const {blogItems} = this.state,
            columns = _.map(
                blogItems,
                item => [item.title, item.metaInfo.likes]
            );

        return (
            <div>
                <BlogList
                    blogItems = {blogItems}
                    like = {this.like}
                />
                <PieChart
                    columns = {columns}
                />
            </div>
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
