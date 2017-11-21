import {connect} from 'react-redux';
import PieChart from '../components/widgets/blog/PieChart';
import {map} from 'lodash/collection';

const stateToProps = (state) => ({
    columns: map(state.posts.entries, item => [item.title, item.metaInfo.likes])
});

export default connect(stateToProps)(PieChart);
