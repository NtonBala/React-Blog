/*
Это код работает в jsbin, но через какое-то время в консоли всплывает ошибка ERR_INCOMPLETE_CHUNKED_ENCODING.
Пытался разобраться почему, но так и не понял.
Интересно, что я меняю что-то в данных и jsbin все равно все послушно обновляет.
*/

const DOM = React.DOM;

const blogItems = [
    {
        key: '676hjh67',
        image: {
            src: 'https://upload.wikimedia.org/wikipedia/en/0/07/Valerian_and_the_City_of_a_Thousand_Planets.jpg',
            alt: 'image Valerian'
        },
        description: 'In the 28th century, Valerian (Dane DeHaan) and Laureline (Cara Delevingne) are special operatives charged with keeping order throughout the human territories. On assignment from the Minister of Defense, the two undertake a mission to Alpha, an ever-expanding metropolis where species from across the universe have converged over centuries to share knowledge, intelligence, and culture. At the center of Alpha is a mysterious dark force which threatens the peaceful existence of the City of a Thousand Planets, and Valerian and Laureline must race to identify the menace and safeguard not just Alpha, but the future of the universe.'
    },
    {
        key: 'jk089d42',
        image: {
            src: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Wonder_Woman_%282017_film%29.jpg/220px-Wonder_Woman_%282017_film%29.jpg',
            alt: 'image Wonder Woman'
        },
        description: 'In the early 20th century, the Amazon princess Diana, who is living on the island of Themyscira, meets American military pilot Steve Trevor when he washes ashore. After learning from him about the ongoing events of World War I, she leaves her home for London to bring an early end to the war.'
    },
    {
        key: '2378huy1',
        image: {
            src: 'https://upload.wikimedia.org/wikipedia/en/a/a2/The_Mummy_%282017%29.jpg',
            alt: 'image The Mummy'
        },
        description: 'Tom Cruise headlines a spectacular, all-new cinematic version of the legend that has fascinated cultures all over the world since the dawn of civilization: The Mummy. Thought safely entombed in a tomb deep beneath the unforgiving desert, an ancient princess (Sofia Boutella of Kingsman: The Secret Service and Star Trek Beyond) whose destiny was unjustly taken from her is awakened in our current day, bringing with her malevolence grown over millennia and terrors that defy human comprehension. From the sweeping sands of the Middle East through hidden labyrinths under modern-day London, The Mummy brings a surprising intensity and balance of wonder and thrills in an imaginative new take that ushers in a new world of gods and monsters.'
    }
];

class BlogList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {blogItems} = this.props;
        return (
            DOM.ul(null, _.map(blogItems, (blogItem) => (
                    DOM.li({key: blogItem.key}, React.createElement(BlogItem, {
                        image: {
                            src: blogItem.image.src,
                            alt: blogItem.image.alt
                        },
                        description: blogItem.description}
                    ))
                )
            )
        )
    );
    }
}

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

const TextBox = ({description}) => (
    DOM.span(null, description)
);

ReactDOM.render(
    React.createElement(BlogList, {blogItems}),
    document.getElementById('demo')
);
