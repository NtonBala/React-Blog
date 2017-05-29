const DOM = React.DOM;

const TextBox = ({description}) => (
    DOM.span(null, description)
);

ReactDOM.render(
    React.createElement(TextBox, {
        description: `In the 28th century, Valerian (Dane DeHaan) and Laureline (Cara Delevingne) are special operatives charged with keeping order throughout the human territories. On assignment from the Minister of Defense, the two undertake a mission to Alpha, an ever-expanding metropolis where species from across the universe have converged over centuries to share knowledge, intelligence, and culture. At the center of Alpha is a mysterious dark force which threatens the peaceful existence of the City of a Thousand Planets, and Valerian and Laureline must race to identify the menace and safeguard not just Alpha, but the future of the universe.`
    }),
    document.getElementById('demo')
);
