import {connect} from 'react-redux';
import BlogList from '../components/widgets/blog/BlogList';
import {flowRight} from 'lodash/util';
import {incrementLikes} from '../actions/Posts';

const stateToProps = (state) => ({
    blogItems: state.posts.entries,
    isFetching: state.posts.isFetching,
    error: state.posts.error
});

const actionsToProps = (dispatch) => ({
    like: flowRight(dispatch, incrementLikes)
});

export default connect(stateToProps, actionsToProps)(BlogList);
