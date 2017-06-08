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
