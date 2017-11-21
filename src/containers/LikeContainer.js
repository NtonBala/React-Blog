import {connect} from 'react-redux';
import Like from '../components/widgets/blog/elements/Like';
import {incrementLike} from '../actions/actionCreators';

const actionsToProps = (dispatch, ownProps) => ({
    like: () => dispatch(incrementLike(ownProps.id))
});

export default connect(null, actionsToProps)(Like);
