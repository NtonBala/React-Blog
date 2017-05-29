const DOM = React.DOM;

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

ReactDOM.render(
    React.createElement(Image, {
        src: 'https://upload.wikimedia.org/wikipedia/en/0/07/Valerian_and_the_City_of_a_Thousand_Planets.jpg',
        alt: 'image Valerian',
        width: '300px',
        height: '450px'
    }),
    document.getElementById('demo')
);
