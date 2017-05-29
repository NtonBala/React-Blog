const DOM = React.DOM;

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
    DOM.div(null,
        React.createElement(BlogItem, {
            image: {
                src: `https://upload.wikimedia.org/wikipedia/en/0/07/Valerian_and_the_City_of_a_Thousand_Planets.jpg`,
                alt: `image Valerian`
            },
            description: `In the 28th century, Valerian (Dane DeHaan) and Laureline (Cara Delevingne) are special operatives charged with keeping order throughout the human territories. On assignment from the Minister of Defense, the two undertake a mission to Alpha, an ever-expanding metropolis where species from across the universe have converged over centuries to share knowledge, intelligence, and culture. At the center of Alpha is a mysterious dark force which threatens the peaceful existence of the City of a Thousand Planets, and Valerian and Laureline must race to identify the menace and safeguard not just Alpha, but the future of the universe.`
        }),
        React.createElement(BlogItem, {
            image: {
                src: `https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Wonder_Woman_%282017_film%29.jpg/220px-Wonder_Woman_%282017_film%29.jpg`,
                alt: `image Wonder Woman (2017)`
            },
            description: `In the early 20th century, the Amazon princess Diana, who is living on the island of Themyscira, meets American military pilot Steve Trevor when he washes ashore. After learning from him about the ongoing events of World War I, she leaves her home for London to bring an early end to the war.`
        }),
        React.createElement(BlogItem, {
            image: {
                src: `https://upload.wikimedia.org/wikipedia/en/a/a2/The_Mummy_%282017%29.jpg`,
                alt: `image The Mummy (2017)`
            },
            description: `Tom Cruise headlines a spectacular, all-new cinematic version of the legend that has fascinated cultures all over the world since the dawn of civilization: The Mummy. Thought safely entombed in a tomb deep beneath the unforgiving desert, an ancient princess (Sofia Boutella of Kingsman: The Secret Service and Star Trek Beyond) whose destiny was unjustly taken from her is awakened in our current day, bringing with her malevolence grown over millennia and terrors that defy human comprehension. From the sweeping sands of the Middle East through hidden labyrinths under modern-day London, The Mummy brings a surprising intensity and balance of wonder and thrills in an imaginative new take that ushers in a new world of gods and monsters.`,
        })
    ),
    document.getElementById('demo')
);
