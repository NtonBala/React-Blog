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
